# 🧠 LLM Summarizer

A lightweight Python tool for summarizing natural language text using a pre-trained transformer model from Hugging Face. Ideal for developers and researchers who want quick, high-quality text summarization via CLI or inside a container.

## Table of Contents

1. [📖 Overview](#-overview)  
2. [🧑‍💻 Usage](#-usage)  
3. [🛠️ Configuration](#-configuration)  
4. [📦 Installation](#-installation)  
   - [🐳 Docker](#-docker)  
   - [🐍 Poetry + Python](#-poetry--python)  
5. [📚 Model Details](#-model-details)  
6. [🚀 Summary](#-summary)  

<br>

# 📖 Overview

**LLM Summarizer** loads a pre-trained text summarization model (BART) using Hugging Face's `transformers` library. It simplifies the use of powerful language models by wrapping the summarization functionality in a command-line runnable script and optionally a Docker container.

<br>

# 🧑‍💻 Usage

Run the Python script via Poetry:

```bash
poetry run python summarizer/main.py
```

Expected output:

```text
Zusammenfassung:
 Deutschland ist eine föderale Republik mit 16 Bundesländern. Die Hauptstadt ist Berlin, und die Wirtschaft ist stark exportorientiert.
```

You can customize the input text directly inside `main.py` or extend the script for file/stream input.

<br>

# 🛠️ Configuration

No external configuration is required. The summarizer uses the `facebook/bart-large-cnn` model by default and loads it directly via Hugging Face.

However, for advanced users:
- You can change the model by modifying the `pipeline(...)` call in `main.py`.
- You can also adjust `max_length`, `min_length`, or `do_sample` parameters.

<br>

# 📦 Installation

## 🐳 Docker

Build and run the project in a container:

```bash
docker build -t llm-summarizer .
docker run --rm llm-summarizer
```

## 🐍 Poetry + Python

1. Install dependencies:

   ```bash
   poetry install
   ```

2. Run summarizer:

   ```bash
   poetry run python summarizer/main.py
   ```

<br>

# 📚 Model Details

- **Model used:** `facebook/bart-large-cnn`
- **Architecture:** Encoder-Decoder (Seq2Seq Transformer)
- **Provider:** Hugging Face `transformers`
- **Summary behavior:** Non-sampling, deterministic output (via greedy decoding)

This model was trained on large news corpora (CNN/DailyMail) and is highly optimized for summarization tasks.

<br>

# 🚀 Summary

✅ **Simple LLM summarization via Python or Docker**  
✅ **Uses Hugging Face's BART for state-of-the-art output**  
✅ **Extensible base for future LLM-driven text analysis**  
✅ **Portable: local + containerized setup supported**  
