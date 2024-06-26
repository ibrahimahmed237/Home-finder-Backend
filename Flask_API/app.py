from flask import Flask, jsonify
from Controllers.prediction_controller import predict
from Controllers.recommendations_controller import recommend
import os

app = Flask(__name__)
port = int(os.environ.get('PORT', 5000))

@app.route("/")
def hello():
    return "Welcome to flask APIs!"

@app.route("/predict", methods=['POST'])
def predict_route():
    return predict()

@app.route('/recommend', methods=['POST'])
def recommend_route():
    return recommend()

@app.errorhandler(500)
def internal_server_error(e):
    return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run()