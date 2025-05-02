# 🧠 Understanding LLMs & NLP – Foundations for Applied AI

This README provides a foundational overview of large language models (LLMs), natural language processing (NLP), and the key concepts needed to understand and work with modern AI systems in practice.

## Table of Contents

1. [📖 Overview](#-overview)
2. [🧑‍💻 Usage](#-usage)
3. [🛠️ Configuration](#-configuration)
4. [🧭 Core Concepts](#-core-concepts)
   - [🔡 NLP & Machine Learning](#-nlp--machine-learning)
   - [🧩 Tokenization](#-tokenization)
   - [🧠 Transformers & Attention](#-transformers--attention)
   - [📦 Hugging Face Ecosystem](#-hugging-face-ecosystem)
   - [🔁 Training vs Inference](#-training-vs-inference)
   - [🧠 Model Types: GPT, BERT, T5, LLaMA](#-model-types-gpt-bert-t5-llama)
   - [📤 Decoding Methods](#-decoding-methods)
5. [🚀 Summary](#-summary)

<br>
<br>

# 📖 Overview

This guide provides a deep but practical understanding of the building blocks of modern AI systems, especially LLMs like GPT, BERT, T5 and LLaMA. These concepts are essential if you want to use, fine-tune, or even build your own LLMs for tasks like data recognition, summarization, extraction, or chat-based applications.

<br>
<br>

# 🧑‍💻 Usage

You can run a pretrained model like BART to summarize text using Hugging Face’s `transformers` library:

```python
from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
text = "Germany is a federal republic with 16 states..."
summary = summarizer(text, max_length=60, min_length=15, do_sample=False)
print(summary[0]['summary_text'])
```

<br>
<br>

# 🛠️ Configuration

Install requirements using Poetry:

```bash
poetry add transformers torch
```

Optionally containerize the setup with a Dockerfile using Python 3.10 and system dependencies for PyTorch and Hugging Face.

<br>
<br>

# 🧭 Core Concepts

## 🔡 NLP & Machine Learning

**NLP (Natural Language Processing)** is the subfield of AI focused on enabling machines to understand, interpret, and generate human language.

**ML (Machine Learning)** allows models to learn from data rather than being explicitly programmed. LLMs are advanced ML models specialized in language.

## 🧩 Tokenization

Tokenization is the process of breaking text into "tokens" – small pieces the model understands. Example:

- "dog" → 1 token  
- "doghouse" → 2 tokens like `["dog", "house"]`

Each model uses its own tokenization method (e.g., BPE, WordPiece, SentencePiece).

## 🧠 Transformers & Attention

The transformer is the architecture behind all modern LLMs.

**Key element: Attention** – the model decides which words to "pay attention" to. This is crucial for understanding context and relationships in language (e.g., resolving "he", "it", "that").

## 📦 Hugging Face Ecosystem

- `transformers`: library to load and run pretrained models
- `datasets`: thousands of open-source datasets
- `evaluate`: tools to assess model output (e.g., BLEU, ROUGE)
- `spaces`: live model demos hosted with Gradio or Streamlit

## 🔁 Training vs Inference

- **Training**: The model learns patterns from data (expensive, requires GPUs and lots of data)
- **Inference**: The model is applied to new data (e.g., summarizing a paragraph)

## 🧠 Model Types: GPT, BERT, T5, LLaMA

| Model  | Type            | Purpose             | Usage                   |
|--------|------------------|----------------------|--------------------------|
| GPT    | Decoder-only     | Text generation      | Chatbots, creative text |
| BERT   | Encoder-only     | Text understanding   | Classification, search  |
| T5     | Encoder-Decoder  | Text-to-text tasks   | Translation, summarizing|
| LLaMA  | Decoder-only     | Efficient generation | On-device/offline use   |

## 📤 Decoding Methods

When generating text, models predict one word/token at a time based on probabilities:

| Method         | Description |
|----------------|-------------|
| **Greedy**     | Always pick the highest-probability next token |
| **Beam Search**| Explore multiple candidate sequences and pick the best one |
| **Sampling**   | Randomly choose among the top-k likely tokens (adds creativity) |

<br>
<br>

# 🚀 Summary

✅ **You can now load and use pretrained LLMs via Hugging Face**

✅ **You understand how models tokenize and generate output**

✅ **You grasp the differences between major LLM architectures (GPT, BERT, etc.)**

✅ **You know how inference and decoding affect results**

✅ **You're ready to go deeper: fine-tuning, RAG, or custom deployments**
