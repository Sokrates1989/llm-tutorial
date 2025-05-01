FROM python:3.10-slim

WORKDIR /app

COPY pyproject.toml poetry.lock* /app/
COPY summarizer/ /app/summarizer

RUN pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install --only main

ENTRYPOINT ["python", "summarizer/main.py"]
