import axios from "axios";
// const todoDataUrl = "http://localhost:3100/todos";
const todoDataUrl = process.env.REACT_APP_JSON_SERVER_ENDPOINT + "/todos";
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: any) => {
  const response: any = await axios.post(todoDataUrl, todo);
  return response.data;
};
export const deleteTodoData = async (id: any) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};
export const updateTodoData = async (id: any, todo: any) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};