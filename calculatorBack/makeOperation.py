from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/operation', methods=['POST'])
def makeOperation():
    print(request.json)
    myRequest = request.json
    firstNumber = float(request.get_json()['firstNumber'])
    secondNumber = float(request.get_json()['secondNumber'])
    if myRequest['nameOfOperation'] == 'add':
        response = {'result': (firstNumber + secondNumber)}
    elif myRequest['nameOfOperation'] == 'subtract':
        response = {'result': (firstNumber - secondNumber)}
    elif myRequest['nameOfOperation'] == 'divide':
        if secondNumber == 0:
            response = {'result': "Error: You can't divide by zero!"}
        else:
            response = {'result': (firstNumber / secondNumber)}
    elif myRequest['nameOfOperation'] == 'multiply':
        response = {'result': (firstNumber * secondNumber)}

    return response


if __name__ == "__main__":
    app.run(debug=True)
