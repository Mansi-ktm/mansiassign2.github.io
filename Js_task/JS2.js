function alphabetizeString(str) 
{
    return str.split('').sort().join('');
}
function displayAlphabetizedString() 
{
    var inputString = document.getElementById('inputString').value;
    var result = alphabetizeString(inputString);
    document.getElementById('result').textContent = result;
}
