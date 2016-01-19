(function (exports, console, documentBody) {
    'use strict';

    // Use the Konami Code to execute an easter egg.
    // PROTIP: The Konami code is ↑ ↑ ↓ ↓ ← → ← → Ⓑ Ⓐ «enter»

    var theCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
        correctCharsEntered = 0,
        isKonamiMode = false;

    exports.onkeyup = function(event){
        if (event.keyCode == theCode[correctCharsEntered]) {
            correctCharsEntered++;

            if (correctCharsEntered === theCode.length) {
                isKonamiMode = documentBody.classList.toggle('konami');
                console.log('KONAMI CODE ' + (isKonamiMode ? 'ACTIVATED' : 'DEACTIVATED'));
                correctCharsEntered = 0;
            }
        } else {
            correctCharsEntered = 0;
        }
    };

})(window, console, document.body);
