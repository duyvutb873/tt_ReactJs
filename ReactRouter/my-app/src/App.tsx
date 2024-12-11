import React from 'react'

import { Counter } from "./redux/counter/Counter.tsx"
import TodoList from "./redux/todo/TodoList.tsx"
import './App.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Counter />
      <TodoList />
    </div>
  )
}

export default App
