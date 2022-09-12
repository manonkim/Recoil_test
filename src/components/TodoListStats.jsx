import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../recoil';

export const TodoListStats = () => {
  const { totalCompletedNum, totalNum } = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>Total items : {totalNum}</li>
      <li>Items completed : {totalCompletedNum}</li>
    </ul>
  );
};
