// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function () {
    // Creazione dinamica dei quadrati
    for (var i = 0; i < 36; i++) {
        $('.container').append('<div class="square"></div>')
    }

    // Sperimento il metodo .one() -> come .on() ma il gestore eventi è eseguito al più una volta per elemento e per tipo di evento
    $('.square').one('click', function () {
        var quadrato = $(this);

        // Chiamata AJAX
        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function (obj) {
                    quadrato.text(obj.response);
                    // if (obj.response <= 5) {
                    //     quadrato.addClass('giallo');
                    // } else {
                    //     quadrato.addClass('verde');
                    // }

                    // Operatore ternario in sostituzione al 'if-else'
                    obj.response <= 5 ? quadrato.addClass('giallo') : quadrato.addClass('verde');
                },
                error: function () {
                    alert("È avvenuto un errore.")
                }
            }
        );
    });
});