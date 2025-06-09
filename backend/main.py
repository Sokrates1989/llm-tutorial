# Entry point for the FastAPI app
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import redis
from api.settings import settings
from api.routes import test, files, car_sales

app = FastAPI()
app.include_router(test.router)
app.include_router(files.router)
app.include_router(car_sales.router)


print(f"🔧 Connecting to Redis at: {settings.REDIS_URL}")
r = redis.Redis.from_url(settings.REDIS_URL)


# 🔐 Enable CORS.
origins = [origin.strip() for origin in settings.ALLOWED_CORS_ORIGINS.split(",") if origin.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Middleware to log request headers, if Debug is enabled in env variables.
if settings.DEBUG:
    @app.middleware("http")
    async def log_request_headers(request: Request, call_next):

        # Output basic request info.
        print(f"🔹 Received request: {request.method} {request.url}")

        # Read and log the request headers.
        headers = request.headers
        print(f"🔹 Received request with headers: {headers}")

        # Read and log the request body
        body = await request.body()
        print(f"🔹 Body: {body.decode('utf-8') if body else 'No Body'}")

        response = await call_next(request)
        return response


# Redis test Endpoints.
@app.get("/")
def read_root():
    visits = r.incr("visits")
    return {"message": f"Hello from FastAPI! This page has been visited {visits} times."}

@app.get("/cache/{key}")
def get_cache(key: str):
    value = r.get(key)
    if value is None:
        raise HTTPException(status_code=404, detail="Key not found")
    return {"key": key, "value": value.decode()}

@app.post("/cache/{key}")
def set_cache(key: str, value: str):
    r.set(key, value)
    return {"message": f"Stored key '{key}' with value '{value}'"}



# Health check endpoint.
@app.get("/health")
def check_health():
    return {"status": "OK"}

# Get Image version.
@app.get("/version")
def get_version():
    return {"IMAGE_TAG": f"{settings.IMAGE_TAG}"}
