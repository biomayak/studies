"use strict";

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Введите число");
    };

}