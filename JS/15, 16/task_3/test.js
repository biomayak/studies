"use strict";
describe("Accumulator", function() {

    
    function testAccumulator(startingValue, stopValue, step=1) {

        let saves_value = true;
        let expected = startingValue;
        let accumulator = new Accumulator(startingValue);

        for (let i = startingValue; i <= stopValue; i += step) {

            expected += i;
            
            sinon.stub(window, "prompt");
            prompt.onCall(0).returns(`${i}`);

            accumulator.read();

            window.prompt.restore();
            saves_value *= (expected === accumulator.value);
        }
        
        it("Хранит текущее значение value", function() {
            assert.isTrue(!!saves_value);
        });
        it(`Складывает все числа от ${startingValue} до ${stopValue} с шагом ${step} и на выходе получает ${expected}.`, function() {
            assert.equal(expected, accumulator.value);
        });

    }
    

    describe("При введении всех чисел от 5 до 40", function() {testAccumulator(5, 40)});
    describe("При введении всех чисел от -25 до 1", function() {testAccumulator(-25, 1)});
    describe("При введении всех чисел от 0 до 10 с шагом 5", function() {testAccumulator(0, 10, 5)});


});