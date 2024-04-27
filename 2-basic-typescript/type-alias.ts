// 2.3.3 型エイリアス
// type 型名 = 型

// オブジェクトのキー名を明記せずに型エイリアスを定義可能
type Label = {
  [key: string] : string
}

const labels: Label = {
  // 型にないキー名を指定可能
  topTitle: 'トップページのタイトルです',
  topSubTitle: 'トップページのサブタイトルです'
}