import React, { useState, useCallback, useRef } from "react";

type DelayButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props;

  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [viewValue, setViewValue] = useState('');
  // 入力終了を判定するタイマーを保持するRef
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setInputValue(e.target.value);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      timerRef.current = null;

      setIsTyping(false);
      setViewValue(e.target.value);
      onChange(e);
    }, 1000);
  }, [onChange]);

  const text = isTyping ? '入力中...' : `入力したテキスト: ${viewValue}`;

  return (
    <div>
      <input data-testid="input-text" value={inputValue} onChange={handleChange} />
      <span data-testid="display-text">{text}</span>
    </div>
  );
}