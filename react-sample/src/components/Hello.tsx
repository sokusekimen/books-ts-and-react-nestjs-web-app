// 3.1.3 p79
const Hello = () => {
  const onClick = () => {
    alert('hello');
  }
  const text = 'Hello, React';

  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
}

export default Hello;