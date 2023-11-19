"use strict";
;
(function () {
    // never no es undefined, no es null, no es void, no es void (nada)
    // cuando se usa never, la función nunca retorna nada y no se seguirá ejecutando,
    // es decir, la función nunca termina y el código revienta en ese punto
    var error = function (message) {
        throw new Error(message);
    };
    var abc = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!!');
})();
