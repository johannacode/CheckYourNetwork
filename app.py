from flask import Flask, render_template
from checker import check_network

app = Flask(__name__)

@app.route("/")
def home():
    score, results = check_network()
    return render_template("index.html", score=score, results=results)

if __name__ == "__main__":
    app.run(debug=True)