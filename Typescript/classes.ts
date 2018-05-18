class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){

        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: '+ this.name + ' ' + this.email + ' ' + this.age);
    }
}

let imran = new User('imran Tahir','itahirpk@gmail.com',35);
