"use strict";
function Calculator() {

    this.read = function() {
        this.a = +prompt("Введите первое число");
        this.b = +prompt("Введите второе число");
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

}