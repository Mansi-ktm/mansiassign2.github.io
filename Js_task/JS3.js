function multiplyNumbers() 
{
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    
    document.getElementById('result').textContent = 'Multiplication Result: ' + result;
}

function divideNumbers() 
{
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
        if (num2 === 0) 
            {
                document.getElementById('result').textContent = 'Division by zero is not allowed!';
                return;
        }
        var result = num1 / num2;
    
    document.getElementById('result').textContent = 'Division Result: ' + result;
}
