let bienA = document.getElementById('bien1'),
    bienB = document.getElementById('bien2'),
    result = document.getElementById('result');



document.getElementById('add').onclick =
    function add() {
        let ketQua = (+(bienA.value) + +(bienB.value)).toFixed(1);
        result.innerHTML = `Result of Addition = ${ketQua}`;
    }

document.getElementById('sub').onclick =
    function sub() {
        let ketQua = (+(bienA.value) - +(bienB.value)).toFixed(1);
        result.innerHTML = `Result of Subtraction = ${ketQua}`;
    }

document.getElementById('mul').onclick =
    function mul() {
        let ketQua = (+(bienA.value) * +(bienB.value)).toFixed(1);
        result.innerHTML = `Result of Multiplication = ${ketQua}`;
    }

document.getElementById('div').onclick =
    function div() {
        let ketQua = (+(bienA.value) / +(bienB.value)).toFixed(1);
        result.innerHTML = `Result of Division = ${ketQua}`;
    }