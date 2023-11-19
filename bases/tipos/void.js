"use strict";
;
(function () {
    // void especifica que la función no retorna nada
    function callBatman() {
        console.log('Mostrar la batiseñal');
        //una función que no retorna nada (sin return), retorna undefined
        // void != null (null es un valor, void es como vacío o nada)
        // también return; devuelve un void
    }
    var callSuperman = function () {
        console.log('Llamar a Superman');
        return;
    };
    var a = callBatman();
    console.log(a);
})();
