// 2.5.5 インデックス型 p62

type SuppertVersions = {
  [env: number]: boolean;
}

let versions: SuppertVersions = {
  102: false,
  103: false,
  104: true,
  'v105': true // NG
}