import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { __getTodos } from './redux/modules/todos';

function App() {
  const dispatch = useDispatch();
  const {isLoading , error , todos} = useSelector(state => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(__getTodos())
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      {
        todos.map(todo => {
          return <div key={todo.id}>
            {todo.title}
          </div>
        })
      }
    </div>
  )
}

export default App