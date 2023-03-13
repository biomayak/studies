//automatic tests
//BDD - BEHAVIOR DRIVEN DEVELOPMENT
describe("pow", function() {

  // before (() => alert("Тестирование началось"))
  // after (() => alert("Тестирование закончилось"))
  // done (() => alert("Тестирование прошло успешно"))
  // НЕ РАБОТАЕТ

  describe("возводит x в степень 3", function () {

    function makeTestPow3(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
    
    for (let x = 1; x <= 5; x++) {
      makeTestPow3(x);
    }

  });

  describe("возводит x в степень 4", function() {

    function makeTestPow4(x) {
      let expected = x * x * x * x;
      it(`${x} в степени 4 будет ${expected}`, function() {
        assert.equal(pow(x, 4), expected);
      });
    }
    
    for (let x = 1; x <= 5; x++) {
      makeTestPow4(x);
    }

  });

  it("для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

  
});