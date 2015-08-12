$(document).ready(function() {
    $('#button').on('click', function() {
        fizzBuzz($('#number').val())
    })
})

function fizzBuzz (number) {
        
    var i = 1;
        
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
        else {
            output(i);
        }
    }
}

function output(number) {
    $('#result').append(number + '<br>')
}