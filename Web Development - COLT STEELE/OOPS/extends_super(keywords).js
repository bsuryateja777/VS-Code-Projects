class pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }
}


class cat extends pet{

    constructor(name, age, livesleft = 9) {
        super(name, age);
        this.livesleft = livesleft;
    }
    
    meow() {
        return `MEWOOOOOWWWW`;
    }
}

class dog extends pet{

    bark() {
        return `BOOWWWW`;
    }
}