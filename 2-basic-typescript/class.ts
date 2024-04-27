// 2.3.5 クラス p51

// アクセス修飾子
class BasePoint3D {
  public x: number;
  private y: number;
  protected z: number;
}

const basePoint = new BasePoint3D();
basePoint.y // コンパイルエラー
basePoint.z // コンパイルエラー、protectedもだめ

class ChildPoint extends BasePoint3D {
  constructor() {
    super();
    this.x
    this.y // コンパイルエラー、継承したら使えない
    this.z // 使用可能
  }
}