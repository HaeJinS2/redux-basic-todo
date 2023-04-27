import React from 'react'
import useInput from './hooks/useInput'

const App = () => {
	// 우리가 만든 훅을 마치 원래 있던 훅인것마냥 사용해봅니다. 
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitleHandler}
      />

      <input
        type="text"
        name="title"
        value={body}
        onChange={onChangeBodyHandler}
      />
    </div>
  );
};

export default App;