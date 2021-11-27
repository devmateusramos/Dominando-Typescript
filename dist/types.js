"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = ['foo', 'bar'];
let values;
values = [1, 3, 5];
// tuple
let title;
title = [2, 'foo', 'bar'];
// enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
// any (qualquer coisa)  Não é legal!
let coisa;
coisa = 1;
coisa = 'string';
coisa = true;
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error();
}
// object
let cart;
cart = {
    key: 'fi',
};
// Type inference
let mensagem2 = 'mensagem definida'; // não precisei por mensagem2: string = ... ele fez isso automaticamente
mensagem2 = 'só nova string';
window.addEventListener('click', (e) => {
    // não precisei por e: MouseEvent = ... ele fez isso automaticamente
    console.log(e.target);
});
