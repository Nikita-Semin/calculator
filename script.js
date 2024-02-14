function add() {
	let number1 = parseFloat(document.querySelector('.number1').value);
	let number2 = parseFloat(document.querySelector('.number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('.result').innerHTML = 'Ошибка ведите числа';
	} else {
		let result = number1 + number2;
		document.querySelector('.result').innerHTML = 'Результат: ' + result;
	}
}

function subtract() {
	let number1 = parseFloat(document.querySelector('.number1').value);
	let number2 = parseFloat(document.querySelector('.number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('.result').innerHTML = 'Ошибка: введите числа';
	} else {
		let result = number1 - number2;
		document.querySelector('.result').innerHTML = 'Результат: ' + result;
	}
}

function multiply() {
	let number1 = parseFloat(document.querySelector('.number1').value);
	let number2 = parseFloat(document.querySelector('.number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('.result').innerHTML = 'Ошибка: введите числа';
	} else {
		let result = number1 * number2;
		document.querySelector('.result').innerHTML = 'Результат: ' + result;
	}
}

function divide() {
	let number1 = parseFloat(document.querySelector('.number1').value);
	let number2 = parseFloat(document.querySelector('.number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('.result').innerHTML = 'Ошибка: введите числа';
	} else if (number2 === 0) {
		document.querySelector('.result').innerHTML = 'Ошибка: деление на ноль';
	} else {
		let result = number1 / number2;
		document.querySelector('.result').innerHTML = 'Результат: ' + result;
	}
}
