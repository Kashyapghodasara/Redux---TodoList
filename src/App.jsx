import './App.css'
import AddTodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
     <div className='flex justify-center text-3xl font-semibold flex-col items-center'>
      <h1>Redux Toolkit - Todo List</h1>
      <AddTodo />
      <Todo />
     </div>
    </>
  )
}

export default App
