from transformers import pipeline

def summarize_text(text: str) -> str:
    """
    Erstellt eine Zusammenfassung des gegebenen Textes mit einem vortrainierten Modell.
    """
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    result = summarizer(text, max_length=60, min_length=15, do_sample=False)
    return result[0]['summary_text']


if __name__ == "__main__":
    # Beispieltext
    example_text = (
        "Deutschland ist eine föderale Republik mit 16 Bundesländern. "
        "Es ist das bevölkerungsreichste Land der EU. "
        "Die Hauptstadt ist Berlin, und die Wirtschaft ist stark exportorientiert."
    )

    summary = summarize_text(example_text)
    print("Zusammenfassung:\n", summary)
