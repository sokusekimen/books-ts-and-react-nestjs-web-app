// 2.3.4 インターフェース p49

interface Point {
  // 型エイリアスとは違い、セミコロンで終わっている注意
  x: number;
  y: number;
}

function prigntPoint(point: Point) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

// 上書き拡張できる
interface Point {
  z: number;
}

// これだとコンパイルエラーになる
prigntPoint({x: 100, y: 200});

// 継承もできる
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}