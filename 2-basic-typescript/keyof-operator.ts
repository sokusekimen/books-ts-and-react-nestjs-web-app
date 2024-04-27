// 2.5.4 keyofオペレーター p61

interface User {
  name: string;
  age: number;
  email: string;
}
type UserKey = keyof User; // 'name' | 'age' | 'email' というUnion型になる

const key1: UserKey = 'name';
const key2: UserKey = 'phone'; // コンパイルエラー

// 実用例
// KはTのプロパティ名が入る
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  name: 'h',
  age: 35,
  email: 'hoge@email.com'
}

getProperty(user, 'name');
getProperty(user, 'gender'); // コンパイルエラー