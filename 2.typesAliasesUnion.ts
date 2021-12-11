//union é quando unimos mais de um tipo com o |
// type alias serve pra não ficar repetindo o código por exemplo onde tem muito union
// Mas o alias também serve pra ter algo mais definido e certo
type Uid = number | string | undefined;
function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a item as ${item}`);
}
function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

type Platform = 'Windows' | 'Linux' | 'Ios';

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform('Ios');

logInfo(23, 'Mateus');
