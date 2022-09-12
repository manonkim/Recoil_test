import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil';
import { TodoItem } from './TodoItem';
import { TodoitemCreator } from './TodoitemCreator';

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoitemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};
