function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const Person1 = new Person('Michael', 'Jordan', 49);
const Person2 = new Person('Lara', 'Bili', 74);

console.log(Person1);
console.log(Person2);