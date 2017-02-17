// Get input from the user
// Do something with input
// Attach output to the HTML Page


$(document).ready(function () {

    function exercise1() {
        //get input1
        var number1 = parseInt($("#number1").val());
        //get input2
        var number2 = parseInt($("#number2").val());
        // get input3
        var number3 = parseInt($("#number3").val());
        // get input4
        var number4 = parseInt($("#number4").val());
        // get input5
        var number5 = parseInt($("#number5").val());

        // do calculation for the greatest
        var greatest = Math.max(number1, number2, number3, number4, number5);
        console.log("#greatest");
        $("#greatest").append(greatest);
        // do calculation for the least
        var least = Math.min(number1, number2, number3, number4, number5);
        console.log("#least");
        $("#least").append(least);

        // do calculation for the mean
        var mean = (number1 + number2 + number3 + number4 + number5) / 5;
        console.log(mean);
        $("#mean").append(mean);
        // do calculation for the sum
        var sum = (number1 + number2 + number3 + number4 + number5);
        console.log(sum);
        $("#sum").append(sum);
        // do calculation for the product
        var product = (number1 * number2 * number3 * number4 * number5);
        console.log(product);
        $("#product").append(product);

        // output for the least
        // output for the greatest
        // output for the mean
        // output for the sum
        // output for the products

    }
    // even listner for the exercise1

    $("#exercise1").click(exercise1);


    function exercise2() {

        var factorialInput = $("#factorial-input").val();

        console.log(factorialInput);
        var input = parseInt(factorialInput);
        var result = input;
        for (var i = 1; i < input; i++) {
            result = i * result;

        }
        console.log(result);
        $("#result").append(result);
    }

    $("#exercise2").click(exercise2);

    function exercise3() {
        var numberI = $("#numberI").val();
        var numberII = $("#numberII").val();

        for (i = 1; i <= 100; i++) {
            if (i % $("#numberI").val() === 0 && i % $("#numberII").val() === 0) {
                $("#result").append('fizzbuzz<br />');
            }
            else if (i % $("#numberI").val() === 0) {
                $("#result").append('fizz <br />');
            }
            else if (i % $("#numberII").val() === 0) {
                $("#result").append('buzz <br />');
            }
            else {
                $("#result").append('<br />' + i + '<br />')
            }
        }
    }

    $("#exercise3").click(exercise3);



    function checkPalindrom() {


        var word = $("#word").val();

        var wordR = word.split('').reverse().join('');
        if (word === wordR) {
            $("#result3").append("<p>" + word + " is palindrome</p>");
        }
        else {
            $("#result3").append("<p>" + wordR + " is not  palindrome</p>");
        }

    }

    $("#magic").click(checkPalindrom);

});