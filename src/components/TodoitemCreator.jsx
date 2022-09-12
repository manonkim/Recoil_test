import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil';

export const TodoitemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    setTodoList((oldList) => [
      ...oldList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}
