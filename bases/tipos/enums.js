"use strict";
;
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
    // ------------------------------
    var AudioLevel1;
    (function (AudioLevel1) {
        AudioLevel1[AudioLevel1["min"] = 1] = "min";
        AudioLevel1[AudioLevel1["medium"] = 2] = "medium";
        AudioLevel1[AudioLevel1["max"] = 10] = "max";
    })(AudioLevel1 || (AudioLevel1 = {}));
    var currentAudio1 = AudioLevel1.medium;
    console.log(currentAudio1);
    console.log(AudioLevel1);
})();
