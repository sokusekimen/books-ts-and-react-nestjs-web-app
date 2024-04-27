// 2.5.7 unknown p63
// anyと同様どんな型でも代入できるが、型安全な状況でしか使用できない
// TypeScript 3.0から導入された

// どんな値でも代入できる
const x: unknown = 123;

// ただしそのままでは使用できない
console.log(x.toFixed(1)); // NG

// 型安全な状況下でアクセス可能になる
if (typeof x === 'number') {
  console.log(x.toFixed(1)); // OK
}