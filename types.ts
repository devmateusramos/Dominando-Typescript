// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ['foo', 'bar'];

let values: Array<number>;
values = [1, 3, 5];

// tuple
let title: [number, string, string];
title = [2, 'foo', 'bar'];

// enum
enum Color {
  white = '#fff',
  black = '#000',
}

// any (qualquer coisa)  Não é legal!
let coisa: any;
coisa = 1;
coisa = 'string';
coisa = true;

// void (vazio)
function logger(): void {
  console.log('foo');
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error();
}

// object
let cart: object;

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
