var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name + ' ' + this.email + ' ' + this.age);
    }
    return User;
}());
var imran = new User('imran Tahir', 'itahirpk@gmail.com', 35);
