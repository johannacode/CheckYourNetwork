import requests
import time

def check_network():
    sites = [
        "https://google.com",
        "https://github.com",
        "https://youtube.com",
        "https://stackoverflow.com"
    ]

    results = []
    total_score = 0

    for site in sites:
        try:
            start = time.time()
            response = requests.get(site, timeout=3)
            latency = (time.time() - start) * 1000

            if response.status_code == 200:
                score = round(max(0, 100 - (latency / 10)))
            else:
                score = 20

        except:
            latency = None
            score = 0

        total_score += score

        results.append({
            "site": site,
            "latency": latency,
            "score": score
        })

    final_score = round(total_score / len(sites))

    return final_score, results

if __name__ == "__main__":
    score, results = check_network()
    print("Score :", score)
    print(results)