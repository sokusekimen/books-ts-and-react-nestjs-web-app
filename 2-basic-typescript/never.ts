// 2.4.5 never型 p58

// エラーを発生させる関数に使う
function error(message: string): never {
  throw new Error(message)
}

// enumと合わせることで、実装漏れに気付ける
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword,
}

// neverの有効的な使い方。実装漏れを検知できる
const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'Setting';
    case PageType.EditProfile:
      return 'Edit Profile';
    case PageType.ChangePassword:
      return 'Change Password';
    default:
      // enumにないのでここには絶対来ないことをneverで伝える
      // 将来enumに定数が追加された場合、ここを通ることをTypeScriptが検知しコンパイルエラーになる
      const wrongType: never = type;
      throw new Error(`${wrongType} is not in PageType`);
  }
}