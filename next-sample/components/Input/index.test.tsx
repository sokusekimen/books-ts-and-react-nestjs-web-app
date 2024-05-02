import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="usename" label="username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should empty in input initial render', () => {
    const inputNode = screen.getByLabelText('username') as HTMLInputElement;
    expect(inputNode).toHaveValue('');
  });

  it('should show input test', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('username') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode).toHaveValue(inputText);
  });

  it('should reset when use clicks button', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('username') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement;
    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue('');
  });
});
