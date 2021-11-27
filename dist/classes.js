"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} year old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level, value) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
        this.value = value;
    }
    logCharDetails() {
        console.log(`The nickname is ${this.nickname} and is ${this.age} years old`);
    }
    get getLevel() {
        console.log('-------GET------');
        return this.level;
    }
    set setValue(value) {
        this.value = value;
    }
}
const mat = new UserAccount('Mateus', 22);
console.log(mat);
console.log(mat.name);
mat.logDetails();
const john = new CharAccount('John', 25, 'johnMaster', 80, 'value');
console.log(john);
john.logDetails();
john.logCharDetails();
console.log(john.getLevel);
john.setValue = 'new value'; // Não funciona como uma função, tem que atribuir o valor
console.log(john.value);
/* Último conceito abstract class. Se eu definir uma classe como abstract ela poderá
ser estendida para outras classes, mas não poderá fazer numa nova instância, por exemplo
se eu coloco na classe: "class UserAccount" como "abstract class UserAccount" eu teria
um erro para fazer o const mat = new UserAccount() enquanto funcionaria normal
pra estender para o CharAccount. Porque classes abstract  não podem criar
objetos a partir dela, mas pode estender essa classe. Sendo útil
quando queremos que uma classe seja modelo pra outras classes mas não queremos
criar nenhum objeto a partir da mesma. */
