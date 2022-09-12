import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil';
import { TodoItem } from './TodoItem';
import { TodoitemCreator } from './TodoitemCreator';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoitemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};
