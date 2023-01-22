function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const rezult = Number(num1) + Number(num2);

    document.getElementById('sum').value = rezult;
}

/*
document.getElementById('num1')
<input type=​"text" id=​"num1">​
const input1 = document.getElementById('num1')
undefined
const input2 = const input1 = document.getElementById('num2')
VM246:1 Uncaught SyntaxError: Unexpected token 'const'
const input2 = document.getElementById('num2')
undefined
Number(input1.value)
0
Number(input2.value)
0
cunst sum = document.getElementById('sum')
VM475:1 Uncaught SyntaxError: Unexpected identifier 'sum'
const sum = document.getElementById('sum')
undefined
*/
