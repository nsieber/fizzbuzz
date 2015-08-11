$(document).ready(function() {
    $('#button').on('click', function() {
        fizzBuzz(15)
    })
})

function fizzBuzz (number) {
        
    var i = 3;
        
    for (i; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            output('fizzbuzz');
        }
        else if (i % 3 == 0) {
            output('fizz');
        }
        else if (i % 5 == 0) {
            output('buzz');
        }
    }
}

function output(number) {
    $('#result').append(number + '<br>')
}