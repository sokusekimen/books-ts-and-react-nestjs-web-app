// リスト3.14 p99

import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
}

// 通常コンポーネント
const DecreementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log('DecrementButtonが再描画されました');

  return <button onClick={onClick}>Decrement</button>;
}

// メモ化
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('IncrementButtonが再描画されました');

  return <button onClick={onClick}>Increment</button>;
});

// メモ化
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('DoubleButtonが再描画されました');

  return <button onClick={onClick}>Double</button>;
});

export const CounterWithCallback = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  }
  const increment = () => {
    setCount((c) => c + 1);
  }
  // useCallbackを使用してメモ化
  // 関数の内容は変わらないのでButtonは再描画されない
  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <DecreementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
}