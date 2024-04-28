// 3.5.2 useCallbackとuseMemo p94

// Reactコンポーネントの再描画タイミング
// - propsや内部状態が更新されたとき
// - コンポーネント内部で参照しているContextが更新されたとき
// - 親コンポーネントが再描画されたとき

// 親コンポーネントが再描画された際に子コンポーネントの再描画の伝播を止めるためにメモ化を行う
// propsやcontextの値が変化しない限り子は再描画されない

import React, { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean;
}

// 通常コンポーネント
const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizzが再描画されました, issFIzz=${isFizz}`);

  return <span>{isFizz ? 'Fizz' : ''}</span>;
}

type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
}

// メモ化したコンポーネント
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props;
  console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`);
  return (
    <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
  );
});

export const FizzBuzz = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  // Parentの再描画のたびに作成されるので、メモ化していても再描画されてしまう
  const onBuzzClick = () => {
    console.log(`Fuzzがクリックされました, isBuzz=${isBuzz}`);
  }
  console.log(`Parentが再描画されました, count=${count}`);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  );
}