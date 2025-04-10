from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Sample data
data = [
    {"x": 1, "y": 3},
    {"x": 2, "y": 7},
    {"x": 3, "y": 8},
    {"x": 4, "y": 4},
    {"x": 5, "y": 6},
    {"x": 6, "y": 10}
]

# Route for Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Route to serve the data
@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
