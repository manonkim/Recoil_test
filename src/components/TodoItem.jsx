import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil';

//todo 리스트이 값을 표시, 텍스트 변경, 항목 삭제
export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const handleTodoCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const handleTodoDelete = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input type='checkbox' checked={item.isComplete} onChange={handleTodoCompletion} />
      <button onClick={handleTodoDelete}>X</button>
    </div>
  );
};

const replaceItemAtIndex = (todoList, index, newValue) => {
  return [...todoList.slice(0, index), newValue, ...todoList.slice(index + 1)];
};

const removeItemAtIndex = (todoList, index) => {
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
};
