import { useState, useEffect } from "react";

import { ulid } from "ulid";

import * as todoData from "../apis/todos";

export const useTodo = () => {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo: never[]) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: any, done: any) => {
    const todoItem: any = todoList.find((item: any) => item.id === id);
    const newTodoItem: any = { ...todoItem, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo: any) => {
      const newTodoList: any = todoList.map((item: any) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };
  const addTodoListItem = (todoContent: any) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false
    };
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo as never, ...todoList]);
    });
  };
  const deleteTodoListItem = (id: any) => {
    todoData.deleteTodoData(id).then((deleteListItemId: any) => {
      const newTodoList = todoList.filter(
        (item: any) => item.id !== deleteListItemId
      );
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem
  };
};