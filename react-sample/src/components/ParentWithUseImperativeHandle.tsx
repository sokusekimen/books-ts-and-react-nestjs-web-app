// 3.5.5 useImterativeHandle p107
// 依存性が逆転するのであまり使われない、Parentにmessageを持てばいい

import React, { useState, useRef, useImperativeHandle } from 'react';

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null);

  // useImperativeHandleで親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
      showMessage: () => {
        const date = new Date();
        const message = `Hello, it's ${date.toLocaleString()} now`
        setMessage(message);
      }
  }));

  return <div>{message !== null ? <p>{message}</p> : null}</div>;
});

export const ParentWithUseImperativeHandle = () => {
  const childRef = useRef<{ showMessage: () => void }>(null);
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage();
    }
  }

  return (
    <div>
      <button onClick={onClick}>SHow Message</button>
      <Child ref={childRef} />
    </div>
  );
}