import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
      state.loading = false;
    },
    fetchTodosFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
} = todoSlice.actions;

export const fetchTodos = (): AppThunk => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    dispatch(fetchTodosSuccess(data.slice(0, 10))); 
  } catch (error) {
    dispatch(fetchTodosFailure('Failed to fetch todos.'));
  }
};

export default todoSlice.reducer;