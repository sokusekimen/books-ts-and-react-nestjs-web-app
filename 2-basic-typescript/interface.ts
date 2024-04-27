// 2.3.4 インターフェース p49

// セミコロンで終わっている注意
interface Point {
  x: number;
  y: number;
}

function prigntPoint(point: Point) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

// 上書きできる
interface Point {
  z: number;
}

// これだとコンパイルエラーになる
prigntPoint({x: 100, y: 200});