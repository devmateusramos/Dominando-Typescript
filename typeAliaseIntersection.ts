// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: 'Mateus',
  email: 'mateus@email.com',
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: 'hunter',
  level: 200,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  level: 100,
  id: 231,
  name: 'Mateus Ramos',
  nickname: 'hunter2',
};
