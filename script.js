var number_one;
var number_two;
var symbol;



function sumb (znak) {
    if(symbol == undefined) {
        symbol = znak
        document.getElementById("calculator").value += znak
    }
    else{
        document.getElementById('error').textContent = "Вы уже ввели знак "
    }
}
function calc (number) {
    if (number_one == undefined){
        number_one = number
        document.getElementById("calculator").value += number

    }

    else if (number_two == undefined && symbol != undefined){
        number_two = number
        document.getElementById("calculator").value += number

        if(symbol == "+"){
            document.getElementById('result').textContent = " " + ( Number(number_one) + Number(number_two))
        }
        else if(symbol == "-"){
            document.getElementById('result').textContent = " " + ( Number(number_one) - Number(number_two))
        }
        number_one = undefined
        number_two = undefined
        symbol = undefined
        document.getElementById('calculator').value = " "
    }

    else {
        document.getElementById('error').textContent = "ERROR"
    }

}
