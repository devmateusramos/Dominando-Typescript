class UserAccount {
  public name: string; /* Pode fazer qualquer coisa e 
  ele é implícito se não colocar nada vai ser ele */
  protected age: number; /* Permite ser chamado e utilizado / modificado somente 
  nessa classe e nas classes estendidas. Por exemplo se aqui fosse private
  ao invés de protected ele não poderia ser chamado ou modificado na classe
  estendida CharAccount, mesmo comportamento que o private basicamente mas permite
  ser usado nas subclasses// Exemplo sendo private eu não consigo chamar
  o age no logCharDetails embora funcione sendo mostrado pelo 
  logDetails que herda da classe estendida. */

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} year old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; /* Ele não poderá ser lido ou alterado fora da classe
  poderíamos por exemplo criar um método dentro da classe que exibisse ele, 
  mas chamar ele fora dela
  direto tentando um john.nickname não vai funcionar. */
  readonly level: number; /* Ele pode ser lido fora da classe mas não pode ser 
  alterado fora dela */

  value: string;

  constructor(
    name: string,
    age: number,
    nickname: string,
    level: number,
    value: string
  ) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
    this.value = value;
  }

  logCharDetails(): void {
    console.log(
      `The nickname is ${this.nickname} and is ${this.age} years old`
    );
  }

  get getLevel() {
    console.log('-------GET------');
    return this.level;
  }

  set setValue(value: string) {
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
