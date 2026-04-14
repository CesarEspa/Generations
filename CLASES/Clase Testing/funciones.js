/*
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}
*/


function mean(a, b, c){

    if(c=== undefined){
        return (a + b) / 2
    }
    return (a + b + c) / 3
}



module.exports = {mean};