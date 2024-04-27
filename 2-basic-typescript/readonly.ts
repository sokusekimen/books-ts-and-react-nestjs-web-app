// 2.5.6 readonly p62
// constは変数だけだが、オブジェクトやクラスのプロパティも再代入不可とする

type User = {
  readonly name: string;
  readonly gender: string;
}

let user: User = { name: 'Takuya', gender: 'Male' }
user.name = 'Takuma'; // NG

// Readonly型というジェネリック型を指定するとすべてのプロパティが使用不可に
type User2 = {
  name: string;
  gender: string;
}
type UserReadOnly = Readonly<User2>;

let user2: User2 = { name: 'Takuya', gender: 'Male' }
user2.name = 'Takuma'; // OK
let userReadOnly: UserReadOnly = { name: 'Takuya', gender: 'Male' }
userReadOnly.name = 'Takuma'; // NG