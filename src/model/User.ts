export interface User {
  id: number;
  username: string;
  phoneNumber: string;
  capital: number;
  sportsMoney: number;
  casinoMoney: number;
}

export interface SignUp {
  username: string;
  phoneNumber: string;
  password: string;
}
