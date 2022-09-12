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

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input />
      <button>X</button>
    </div>
  );
};

const replaceItemAtIndex = (todoList, index, newValue) => {
  return [...todoList.slice(0, index), newValue, ...todoList.slice(index + 1)];
};
