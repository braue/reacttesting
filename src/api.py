#THIS WILL PROBABLY BE AN API.PY FILE IN THE BACKEND

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all domains by default

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "BACKEND HIT!"}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)