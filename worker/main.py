import json

from generator import fill_in_blank, vocabulary

SAMPLE_SENTENCES = [
    "Latency accumulates across network hops in a distributed system.",
    "The circuit breaker pattern prevents cascading failures in microservices.",
    "Horizontal scaling adds more servers to distribute the load.",
    "Eventual consistency means all nodes converge to the same state over time.",
    "An idempotent operation produces the same result no matter how many times it is executed.",
]

if __name__ == "__main__":
    for sentence in SAMPLE_SENTENCES:
        print(f"\n--- Sentence: {sentence} ---")

        vocab = vocabulary.generate(sentence)
        fitb = fill_in_blank.generate(sentence)

        result = {
            "sentence": sentence,
            "vocabulary": vocab.model_dump(),
            "fill_in_blank": fitb.model_dump(),
        }
        print(json.dumps(result, ensure_ascii=False, indent=2))
