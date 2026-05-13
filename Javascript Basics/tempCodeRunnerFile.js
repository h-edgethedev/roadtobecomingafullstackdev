function factorialCalculator(number) {
    var result= 1;
    for (var i= 1; i<=number; i++){
        result*=i
    }
    return result
}
var num= 5
var factorial= factorialCalculator(num)
var resultMsg= `Factorial of ${num} is ${factorial}`
console.log(resultMsg)