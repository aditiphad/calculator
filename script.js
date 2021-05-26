function add() {
    var box1 = document.getElementById("numb1").value;
    var box2 = document.getElementById("numb2").value;

    var result = parseFloat(box1) + parseFloat(box2);
    if (!isNaN(result.toFixed(4))) {
        document.getElementById("answers").innerHTML = "The answer is " + result.toFixed(4);
    }
}

function subtract() {
    var box1 = document.getElementById("numb1").value;
    var box2 = document.getElementById("numb2").value;

    var result = parseFloat(box1) - parseFloat(box2);
    if (!isNaN(result.toFixed(4))) {
        document.getElementById("answers").innerHTML = "The answer is " + result.toFixed(4);
    }
}

function divide() {
    var box1 = document.getElementById("numb1").value;
    var box2 = document.getElementById("numb2").value;

    var result = parseFloat(box1) / parseFloat(box2);
    if (!isNaN(result.toFixed(4))) {
        document.getElementById("answers").innerHTML = "The answer is " + result.toFixed(4);
    }
}

function multiply() {
    var box1 = document.getElementById("numb1").value;
    var box2 = document.getElementById("numb2").value;

    var result = parseFloat(box1) * parseFloat(box2);
    if (!isNaN(result.toFixed(4))) {
        document.getElementById("answers").innerHTML = "The answer is " + result.toFixed(4);
    }
}