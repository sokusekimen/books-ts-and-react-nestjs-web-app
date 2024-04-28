// リスト 3.15 p100
import React, { useState, useMemo } from "react";

export const UseMemoSample = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickButton = () => {
    setItems((prevItems) => [...prevItems, text]);
    setText('');
  }

  // 描画事に計算が走る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);
  // itemsが更新されたときのみ
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0);
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
}