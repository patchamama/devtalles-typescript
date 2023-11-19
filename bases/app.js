"use strict";
;
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    console.log(batman, superman, existe);
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    console.log({ parejaHeroes: parejaHeroes, villano: villano });
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log({ aliados: aliados });
    //Enumeraciones
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaAcuaman = fuerza.acuaman;
    console.log(fuerza);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    console.log(activar_batiseñal());
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    console.log(pedir_ayuda());
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    var largoDelPoder1 = poder.length;
    console.log({ poder: poder, largoDelPoder: largoDelPoder, largoDelPoder1: largoDelPoder1 });
})();
