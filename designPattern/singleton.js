class Test {
    constructor() {

    }
}

const test1 = new Test();
const test2 = new Test();

console.log(test1 === test2);
// false


class Singleton {
    constructor(data) {
        this.data = data;

        const instance = this.constructor.instance;

        if (instance) {
            return instance
        }

        this.constructor.instance = this;
    }
}

// const test3 = new Singleton();
// const test4 = new Singleton();
// const test5 = new Singleton();
// const test6 = new Singleton();
// const test7 = new Singleton();

// console.log(test3 === test7);
// true

const test8 = new Singleton(10);
const test9 = new Singleton(50);

console.log(test8.data);
console.log(test9.data);

// 10 10