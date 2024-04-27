// 2.3.2 型アサーション p47
// TypeScriptが型推論をしてくれない場合、明示的に形を指定する

// 型推論の場合TypeScriptはHTMLElement | nullだと思っているので、使用したいプロパティにアクセスできない
const myCanvas = document.getElementById('main_canvas');
console.log(myCanvas.width); //ここでTS2339エラーにになる

// 下記のようにasで指定する
// アサーションできるのは下記
// - より具体的な型
// - より汎化する型
const myCanvas2 = document.getElementById('main_canvas') as HTMLCanvasElement;

// asを乱用するとコンパイルエラーにならないことがあるので注意
const hoge: any = 'test';
const fuga: number = hoge as number;
// 上記ではanyだったものをnumberにしているので（具体的な型へのアサーション）問題ないが、実行するとにエラーになる
console.log(fuga.toFixed(2));