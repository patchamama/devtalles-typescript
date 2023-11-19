"use strict";
;
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var volcanNegro = "H\u00E9roe: Volc\u00E1n Negro";
    var concat = "".concat(batman, " ").concat(linternaVerde);
    var abc = 123;
    console.log("I am ".concat(batman, " ").concat(abc));
    console.log(concat.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
