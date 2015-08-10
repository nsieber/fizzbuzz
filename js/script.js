$(document).ready(function() {
    $('#button').on('click', function() {
        showResult(5)
    })
//
    function showResult (number) {
        var i = 3;
        for (i; i <= number; i++) {
            if (i % 3 == 0) {
                console.log('fizz');
            }
        }
    }
})

