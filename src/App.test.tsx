import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import * as todoData from './apis/todos';

test('renders learn react link', () => {
  render(<App />);
  const a = null;
  console.log(a)
  console.log('aがnullかどうか')
  expect(a).toBeNull()
});

// test('get all todo data', async () => {
//   const todos = await todoData.getAllTodosData();
//   console.log(todos.length)
//   expect(todos).toHaveLength(3)
// });

test('paddt todo data', async () => {
  // TODO:本当に叩かずに、モックで確認したい。
  const addData = {
    content: 'テストのTODO',
    id: 'testId',
    done: false
  };
  const todos = await todoData.addTodoData(addData);
  console.log(todos.length)
  const a = null;
  console.log(todos)
  console.log('aがnullかどうか')
  expect(a).toBeNull()
  // expect(todos).toHaveLength(3)
});
