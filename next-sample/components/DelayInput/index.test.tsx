// 非同期コンポーネントのユニットテスト p173
// 1秒待つのにタイマーモックを使用する

import { render, screen, RenderResult, fireEvent, act } from "@testing-library/react";
import { DelayInput } from "./index";

describe('DelayInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    // onChangeが呼ばれたかどうか判定するためにモック化
    handleChange = jest.fn();
    renderResult = render(<DelayInput onChange={handleChange} />);

    jest.useFakeTimers();
  });

  afterEach(() => {
    renderResult.unmount();

    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('should display empty in span initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent('入力したテキスト:');
  });

  it('should display 「入力中...」 immediately after onChange event occcurs', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent('入力中...');
  });

  it('should display input test 1 second after onChange evet occurs', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    // act関数内で実行することにより、タイマーがコールバック中で起きる状態変更が反映されたことを保証する
    act(() => {
      jest.runAllTimers();
    });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`);
  });

  it('should call onChange 1 second after onChange event occurs', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  });
});