import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { fetchTodos } from './todoSlice.ts';

const TodoList: React.FC = () => {
  const { todos, loading, error } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text || todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
