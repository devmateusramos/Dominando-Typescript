/* diferente do type alias interfaces
não funcionam pra tipos primitivos, somente objetos */
interface Game {
  id?: number | string; // Posso usar unions
  title: string;
  description?: string /* Assim como no aliases posso dizer aqui que essa propriedade
  é opcional  */;
  readonly genre: string /* Posso atribuir readonly para propriedade e ela não poderá
  ser atribuido nenhum outro valor após ter sido feito, somente a leitura
  Essas mesmas atribuições que a gente tem pra classe tem também para interfaces */;
  platform: string[];
  getSimilars?: (title: string) => void /* por dizer que o método é opcional
  ele não vai mais funcionar sendo chamado assim 'tlou.getSimilars(tlou.title);'
  pois pode ser undefined e não tem como chamar algo de undefined. */;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "The best game in the world!",
  genre: "Action",
  platform: ["ps4", "ps5"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A plague Tale, Metro`);
  },
};

if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}
console.log(tlou.description);
console.log(tlou.genre);

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last of Us - Left Behind",
  genre: "Action",
  platform: ["ps4", "ps5"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"],
};

/* Posso utilizar a interface pra implementar uma classe, dessa forma
os tipos obrigatórios da interface passam a ser obrigatórios de serem
implementados na classe. */
class CreateGame implements Game {
  title: string;
  genre: string;
  platform: string[];

  constructor(t: string, g: string, p: string[]) {
    (this.title = t), (this.genre = g), (this.platform = p);
  }
}
