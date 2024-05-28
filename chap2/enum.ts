// 2.4.1 Enum型 p54

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let direction: Direction = Direction.Left;
console.log(direction); // -> enumのデフォルトとして2が表示される

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
// APIパラメータとして文字列が渡されたケースとして
const value = 'Down';
const enumValue = value as Direction;
if (enumValue === Direction.Down) {
  console.log('Down is Selected');
}