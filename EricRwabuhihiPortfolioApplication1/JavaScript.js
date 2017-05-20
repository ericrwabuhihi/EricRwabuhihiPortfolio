$(document).ready(function () {
    //Function for exercise1
    function exercise1() {
        //get input1
        var number1 = parseInt($("#number1").val());
        //get input2
        var number2 = parseInt($("#number2").val());
        //get input3
        var number3 = parseInt($("#number3").val());
        //get input4
        var number4 = parseInt($("#number4").val());
        //get input5
        var number5 = parseInt($("#number5").val());

        //do calculations for least

        //do calculation for greatest
        //do calculation for sum
        var sum = number1 + number2 + number3 + number4 + number5;
        var product = number1 * number2 * number3 * number4 * number5;
        var least = Math.min(number1, number2, number3, number4, number5);
        var greatest = Math.max(number1, number2, number3, number4, number5);
        var mean = (number1 + number2 + number3 + number4 + number5) / 5;
        //console.log(mean);
        //do calculation for mean
        //do calculation for product

        //output for least
        $("#least").append(least);
        //output for greatest
        $("#greatest").append(greatest);
        //output for sum
        $("#sum").append(sum);
        //output for mean
        $("#mean").append(mean);
        //output for product
        $("#product").append(product);
    }

    //Event listener for exercise 1
    $("#exercise1").click(exercise1);
    //exercise2
    function calculateFactorial() {

        var inputVal = $("#factorialInput").val();
        var factorialResult = 1;
        $("#factorialOutput").html("Results: ");
        for (var i = inputVal; i > 0; i--) {
            factorialResult *= i;
        }
        $("#factorialOutput").append(factorialResult);
    }
    $("#calculateFactorial").click(calculateFactorial);

    function palindrome() {

        var word = $("#isPalindrome").val();
        var wordR = word.split('').reverse().join('');

        if (word === wordR) {
            $("#Palindrome").append(word + "<p>is palindrome</p>");
        }
        else {
            $("#Palindrome").append(word + "<p>is not palindrome</p>");
        };
    }
    $("#hello").click(palindrome);

    function fizzBuzz() {
        var moon1 = $("#moon1").val();
        var moon2 = $("#moon2").val();
        for (i = 1; i <= 100; i++) {
            if (i % $("#moon1").val() === 0 && i % $("#moon2").val() === 0) {
                $("#hit").append('fizzbuzz');
            } else if (i % $("#moon1").val() === 0) {
                $("#hit").append('<p> buzz</p>');
            }
            else if (i % $("#moon2").val() === 0) {
                $("#hit").append('<p> fizz</p>');
            }
            else {
                $("#hit").append("<p>" + i + "</p>");
            }
        }
    };
    $("#kip").click(fizzBuzz);

});