import requests
from flask import Flask, request, jsonify
import concurrent.futures
from heapq import merge

app = Flask(__name__)

def fetch_numbers_from_url(url):
    try:
        response = requests.get(url, timeout=0.5)
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, dict) and "numbers" in data:
                return data["numbers"]
    except requests.exceptions.Timeout:
        pass  # Ignore timeouts
    except Exception as e:
        print(f"Error fetching data from {url}: {e}")
    return []

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')
    
    with concurrent.futures.ThreadPoolExecutor() as executor:
        numbers_lists = executor.map(fetch_numbers_from_url, urls)
    
    merged_numbers = list(merge(*numbers_lists))
    
    return jsonify(numbers=sorted(set(merged_numbers)))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8008)
