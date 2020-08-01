const sendButton = document.getElementById('button');
const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const resultSpan = document.getElementById('showResult');
const typeOfOperation = document.getElementById('operationText');

sendButton.onclick = () => send();

function send() {
const requestToSend = {
    firstNumber: parseFloat(inputOne.value),
    secondNumber: parseFloat(inputTwo.value),
    nameOfOperation: typeOfOperation.value

}

console.log(requestToSend);
const htmlRequest = new XMLHttpRequest();
htmlRequest.open('POST','http://127.0.0.1:5000/operation');
htmlRequest.setRequestHeader('Content-Type', 'application/json')
htmlRequest.send(JSON.stringify(requestToSend));
htmlRequest.onreadystatechange = (result) => showResult(result, htmlRequest);

}

function showResult(response, xhr) {
    console.log(xhr.readyState)
    if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(response.target.responseText)
        const result = JSON.parse(response.target.responseText)
        resultSpan.innerHTML = 'result: '+ result.result;
    }

}