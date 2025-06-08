from fastapi import APIRouter
from fastapi.responses import FileResponse, JSONResponse
from pathlib import Path
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
import os

router = APIRouter(tags=["car_sales"], prefix="/car-sales")

MOUNT_PATH = Path("/mnt/data")  # consistent with files.py
STATIC_DIR = Path("static")
STATIC_DIR.mkdir(exist_ok=True)


@router.get("/plot")
def generate_and_serve_plot():
    csv_path = MOUNT_PATH / "autos_prepared.csv"

    if not csv_path.exists():
        return JSONResponse(
            content={"error": f"🚫 File not found: {csv_path}"},
            status_code=404
        )

    try:
        # Load and model
        df = pd.read_csv(csv_path)
        model = LinearRegression()
        model.fit(df[["kilometer"]], df[["price"]])

        # Predict for line
        min_x = df["kilometer"].min()
        max_x = df["kilometer"].max()
        X_pred = pd.DataFrame([[min_x], [max_x]], columns=["kilometer"])
        predicted = model.predict(X_pred)

        # Generate plot
        plot_path = STATIC_DIR / "car_price_plot.png"
        plt.figure()
        plt.scatter(df["kilometer"], df["price"])
        plt.plot([min_x, max_x], predicted, color="red")
        plt.xlabel("Kilometer")
        plt.ylabel("Price")
        plt.title("Linear Regression: Price vs Kilometer")
        plt.tight_layout()
        plt.savefig(plot_path)
        plt.close()

        return FileResponse(plot_path, media_type="image/png")

    except Exception as e:
        return JSONResponse(
            content={"error": f"❌ Failed to generate plot: {str(e)}"},
            status_code=500
        )


@router.get("/predict")
def predict_price(kilometer: int):
    """
    Predict the price of a car given its mileage (in km).

    Example:
        /car-sales/predict?kilometer=50000
    """
    csv_path = MOUNT_PATH / "autos_prepared.csv"

    if not csv_path.exists():
        return JSONResponse(
            content={"error": f"🚫 File not found: {csv_path}"},
            status_code=404
        )

    try:
        df = pd.read_csv(csv_path)
        model = LinearRegression()
        model.fit(df[["kilometer"]], df[["price"]])

        prediction = model.predict(pd.DataFrame([[kilometer]], columns=["kilometer"]))[0][0]

        return {
            "kilometer": kilometer,
            "estimated_price": round(prediction, 2)
        }

    except Exception as e:
        return JSONResponse(
            content={"error": f"❌ Prediction failed: {str(e)}"},
            status_code=500
        )
