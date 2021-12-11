type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  /* Ao invés de passar o type sem ser como generics
  passo ele como generic e posso utilizar os type utilities para por exemplo
  garantir imutabilidade */
  title: "Assistir Demon Slayer de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);

// todo.completed = true; /* Agora com o Readonly não posso
// mais alterar assim sem imutabilidade */

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  /* Eu não posso aqui
  só passar o Todo normal, pois quando eu for passar o fieldsToUpdate
  não vou poder alterar só uma informação pois vai ser requerido que tenha
  todos os obrigatórios do tipo Todo, por isso eu posso passar o Partial com o Todo
  de generic, assim basta ter uma propriedade do tipo do type Todo, resumindo
  deixa tudo opcional para este e garante que as props passadas serão do tipo Todo,
  sem afetar o Todo. */
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });

// Pick
type TodoPreview = Pick<Todo, "title" | "description">; /* Só
vai pegar para o type TodoPreview as props title e description de Todo,
completed por exemplo não ser incluído. */

// Omit

type TodoPreview2 = Omit<Todo, "completed">; /*
Vai pegar tudo do type Todo exceto o que eu passar aqui no Omit. */

/* Quando usar Omit ou Pick? Se você quer anular mais coisa faz sentido o Pick,
se quer Pegar mais coisa usar o Omit. */
