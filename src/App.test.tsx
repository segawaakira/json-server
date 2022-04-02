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

test('get all todo data', async () => {
  const todos = await todoData.getAllTodosData();
  const b = null;
  console.log(b)
  console.log('bがnullかどうか')
  console.log(todos.length)
  expect(b).toBeNull()
  expect(todos).toHaveLength(3)
});
