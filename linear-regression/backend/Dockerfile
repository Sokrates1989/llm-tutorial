# Use the official Python base image
FROM python:3.12-slim

# Bake Image tag into the image.
ARG IMAGE_TAG=local_docker
ENV IMAGE_TAG=$IMAGE_TAG

# Set the working directory in the container
WORKDIR /app

# Install system dependencies for your Python packages
RUN apt-get update && apt-get install -y \
    gobject-introspection \
    libpango1.0-dev \
    libcairo2-dev \
    libgdk-pixbuf2.0-dev \
    libffi-dev \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 - && \
    ln -s /root/.local/bin/poetry /usr/local/bin/poetry

# Copy all source code first
COPY . .

# Install Python dependencies and the current project using Poetry.
RUN poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi

# Expose the port that the FastAPI application will run on
EXPOSE 8000

# Start the FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
