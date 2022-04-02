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
  console.log(todos.length)
  expect(todos).toHaveLength(3)
});
