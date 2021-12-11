// ----------------------parte1----------------------
// ----------------------parte1----------------------
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// function useState<S>() {
//   let state: S;

//   function getState() {
//     return state;
//   }

//   function setState(newState: S) {
//     state = newState;
//   }

//   return { getState, setState };
// }

// const newState =
//   useState<string>(); /* Com o generic vc cria a função com algo tipo
// o S que vai na prática ter o tipo Unknown, que igual o any vai permitir
// passar qualquer coisa, mas depois você pode definir um novo tipo que quer usar
// quando for chamar a função por exemplo, e depois disso definido nesse elemento
// só vai permitir o que vc definiu, aqui você poderia definir qualquer tipo pra isso */

// newState.setState("foo");
// console.log(newState.getState());

// newState.setState(123);
// console.log(newState.getState());

// ------------------------------Parte2----------------------------------------
// ------------------------------Parte2-----------------------------------------
// function useState<S extends number | string>() {
//   let state: S;

//   function getState() {
//     return state;
//   }

//   function setState(newState: S) {
//     state = newState;
//   }

//   return { getState, setState };
// }

// const newState =
//   useState<string>(); /* Aqui vai continuar valendo a mesma regra de que
//   uma vez definido não vai poder usar outro tipo, mas agora só vai ser aceito
//   vc defina algo do tipo number ou string, não poderia passar um boolean
//  por exemplo*/

// newState.setState("foo");
// console.log(newState.getState());

// // newState.setState(123);
// // console.log(newState.getState());
// -----------------------------------parte3-----------------------
// -----------------------------------parte3-----------------------
// function useState<S extends number | string = string>() {
//   let state: S;

//   function getState() {
//     return state;
//   }

//   function setState(newState: S) {
//     state = newState;
//   }

//   return { getState, setState };
// }

// const newState =
//   useState(); /* Igual o anterior da parte 2 mas aqui se vc não passar nada
//   não vai ser Unknown, mas vai ser string por default*/

// newState.setState("foo"); // Passar número vai dar erro
// console.log(newState.getState());
// ---------------parte 4----------------------
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// function useState<S>() {
//   let state: S;

//   function getState() {
//     return state;
//   }

//   function setState(newState: S) {
//     state = newState;
//   }

//   return { getState, setState };
// }

// const newState =
//   useState<string>(); /* Com o generic vc cria a função com algo tipo
// o S que vai na prática ter o tipo Unknown, que igual o any vai permitir
// passar qualquer coisa, mas depois você pode definir um novo tipo que quer usar
// quando for chamar a função por exemplo, e depois disso definido nesse elemento
// só vai permitir o que vc definiu, aqui você poderia definir qualquer tipo pra isso */

// newState.setState("foo");
// console.log(newState.getState());

// newState.setState(123);
// console.log(newState.getState());

// ------------------------------Parte2----------------------------------------
// ------------------------------Parte2-----------------------------------------
// function useState<S extends number | string>() {
//   let state: S;

//   function getState() {
//     return state;
//   }

//   function setState(newState: S) {
//     state = newState;
//   }

//   return { getState, setState };
// }

// const newState =
//   useState<string>(); /* Aqui vai continuar valendo a mesma regra de que
//   uma vez definido não vai poder usar outro tipo, mas agora só vai ser aceito
//   vc defina algo do tipo number ou string, não poderia passar um boolean
//  por exemplo*/

// newState.setState("foo");
// console.log(newState.getState());

// // newState.setState(123);
// // console.log(newState.getState());
// -----------------------------------parte3-----------------------
// -----------------------------------parte3-----------------------
// function useState<S extends number | string = string>() {
//   let state: S;

//   function getState() {
//     return state;
//   }

//   function setState(newState: S) {
//     state = newState;
//   }

//   return { getState, setState };
// }

// const newState =
//   useState(); /* Igual o anterior da parte 2 mas aqui se vc não passar nada
//   não vai ser Unknown, mas vai ser string por default*/

// newState.setState("foo"); // Passar número vai dar erro
// console.log(newState.getState());
// ---------------parte 4----------------------
// ---------------parte 4----------------------

type numOrStr = number | string;
function useState<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState(); /* Igual o anterior da parte 4 mas aqui usamos
  o type aliases para fazer a definição no lugar, poderia ser interface também*/

newState.setState("foo");
console.log(newState.getState());
