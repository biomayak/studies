let calculator = {
    read() {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

let a,b;
a = -(-prompt('Введите первое число'));
b = -(-prompt('Введите второе число'));

calculator.read(a,b)