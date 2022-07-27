MathUtils = function() {};
 
MathUtils.prototype.sum = function(number1, number2) {
        return Number(number1) + Number(number2);
}
 
MathUtils.prototype.subtract = function(number1, number2) {
    return number1 - number2;
}
 
MathUtils.prototype.multiply = function(number1, number2) {
    return number1 * number2;
}
 
MathUtils.prototype.divide = function(number1, number2) {
    return number1 / number2;
}
 
MathUtils.prototype.average = function(number1, number2) {
    len = arguments.length;
    sum = 0;
    for(i = 0; i < len; i++){
        sum += arguments[i];
        avg = sum / len;   
    }
    return avg;
}
