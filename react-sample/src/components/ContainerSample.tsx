// リスト3.9 p86
import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;
    return (
      <div style={{ background: 'red' }}>
        <span>{title}</span>
        {/* childrenを埋め込むと、このコンポーネントの開始と閉じタグで囲んだ要素を表示します */}
        <div>{children}</div>
      </div>
    );
}

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  );
}

export default Parent;