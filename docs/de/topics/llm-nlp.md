# 🧠 Verständnis von LLMs & NLP – Grundlagen für angewandte KI

Dieses README bietet einen grundlegenden Überblick über Large Language Models (LLMs), Natural Language Processing (NLP) und die zentralen Konzepte, die notwendig sind, um moderne KI-Systeme in der Praxis zu verstehen und anzuwenden.

## Inhaltsverzeichnis

1. [📖 Überblick](#-überblick)  
2. [🧑‍💻 Verwendung](#-verwendung)  
3. [🛠️ Konfiguration](#-konfiguration)  
4. [🧭 Zentrale Konzepte](#-zentrale-konzepte)  
   - [🔡 NLP & Machine Learning](#-nlp--machine-learning)  
   - [🧩 Tokenisierung](#-tokenisierung)  
   - [🧠 Transformer & Attention](#-transformer--attention)  
   - [📦 Hugging-Face-Ökosystem](#-hugging-face-ökosystem)  
   - [🔁 Training vs. Inferenz](#-training-vs-inferenz)  
   - [🧠 Modelltypen: GPT, BERT, T5, LLaMA](#-modelltypen-gpt-bert-t5-llama)  
   - [📤 Dekodiermethoden](#-dekodiermethoden)  
5. [🚀 Zusammenfassung](#-zusammenfassung)

<br><br>

# 📖 Überblick

Diese Anleitung vermittelt ein tiefes, gleichzeitig praxisnahes Verständnis für die Bausteine moderner KI-Systeme – insbesondere für LLMs wie GPT, BERT, T5 und LLaMA. Diese Konzepte sind essenziell, wenn man solche Modelle nutzen, feinjustieren oder sogar eigene Anwendungen wie Datenextraktion, Zusammenfassung oder Chatbots entwickeln möchte.

<br><br>

# 🧑‍💻 Verwendung

Ein vortrainiertes Modell wie BART kann zur Textzusammenfassung genutzt werden – mit der `transformers`-Bibliothek von Hugging Face:

;;;python
from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
text = "Germany is a federal republic with 16 states..."
summary = summarizer(text, max_length=60, min_length=15, do_sample=False)
print(summary[0]['summary_text'])
;;;

<br><br>

# 🛠️ Konfiguration

Installation der Abhängigkeiten mit Poetry:

;;;bash
poetry add transformers torch
;;;

Optional: Containerisierung mit Dockerfile basierend auf Python 3.10 und notwendigen Systembibliotheken für PyTorch und Hugging Face.

<br><br>

# 🧭 Zentrale Konzepte

## 🔡 NLP & Machine Learning

**NLP (Natural Language Processing)** ist das Teilgebiet der KI, das sich mit dem Verständnis, der Interpretation und Generierung menschlicher Sprache durch Maschinen befasst.

**ML (Machine Learning)** ermöglicht es Modellen, aus Daten zu lernen, anstatt manuell programmiert zu werden. LLMs sind fortgeschrittene ML-Modelle, die auf Sprache spezialisiert sind.

## 🧩 Tokenisierung

Tokenisierung beschreibt das Zerlegen von Text in „Tokens“ – kleine Einheiten, die ein Modell verstehen kann. Beispiele:

- "dog" → 1 Token  
- "doghouse" → 2 Tokens wie `["dog", "house"]`

Jedes Modell verwendet eine eigene Tokenisierungsmethode (z. B. BPE, WordPiece, SentencePiece).

## 🧠 Transformer & Attention

Transformer bilden das Architekturfundament aller modernen LLMs.

**Zentrale Komponente: Attention** – das Modell entscheidet, auf welche Wörter es sich „konzentriert“. Das ist entscheidend für das Sprachverständnis und die Kontextverarbeitung (z. B. beim Auflösen von "er", "es", "dieses").

## 📦 Hugging-Face-Ökosystem

- `transformers`: Bibliothek für vortrainierte Modelle  
- `datasets`: Sammlung tausender Open-Source-Datensätze  
- `evaluate`: Tools zur Bewertung von Modellergebnissen (z. B. BLEU, ROUGE)  
- `spaces`: Live-Demos für Modelle mit Gradio oder Streamlit  

## 🔁 Training vs. Inferenz

- **Training**: Das Modell lernt Muster aus Daten (aufwendig, benötigt GPUs und viele Daten)  
- **Inferenz**: Das trainierte Modell wird auf neue Eingaben angewendet (z. B. Textzusammenfassung)  

## 🧠 Modelltypen: GPT, BERT, T5, LLaMA

| Modell | Typ             | Zweck                 | Anwendungsbeispiele         |
|--------|------------------|------------------------|------------------------------|
| GPT    | Nur Decoder       | Textgenerierung        | Chatbots, kreative Texte     |
| BERT   | Nur Encoder       | Textverständnis        | Klassifikation, Suche        |
| T5     | Encoder-Decoder   | Text-zu-Text-Aufgaben  | Übersetzung, Zusammenfassung |
| LLaMA  | Nur Decoder       | Effiziente Generierung | Offline-/Edge-Anwendungen    |

## 📤 Dekodiermethoden

Bei der Textgenerierung sagt das Modell Wort für Wort voraus, basierend auf Wahrscheinlichkeiten:

| Methode        | Beschreibung |
|----------------|--------------|
| **Greedy**     | Immer das wahrscheinlichste nächste Token wählen |
| **Beam Search**| Mehrere Kandidatensequenzen explorieren und die beste wählen |
| **Sampling**   | Zufällige Auswahl unter den wahrscheinlichsten Tokens (für mehr Kreativität) |

<br><br>

# 🚀 Zusammenfassung

✅ **Vortrainierte LLMs können über Hugging Face geladen und genutzt werden**  
✅ **Verständnis für Tokenisierung und Textgenerierung vorhanden**  
✅ **Kenntnis über Unterschiede gängiger Modellarchitekturen (GPT, BERT usw.)**  
✅ **Einfluss von Inferenz- und Dekodiermethoden ist bekannt**  
✅ **Grundlagen für Feintuning, RAG oder eigene Deployments sind gelegt**
