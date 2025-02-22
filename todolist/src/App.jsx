import './App.css'
import Navbar from './assets/components/Navbar'
function App() {
  function handleDelete() {
    
  }
  function handleEdit() {
    
  }
  function handleAdd() {
    
  }

  return (

    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='w-1/2' name="" id="" />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6  text-sm font-bold'>Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex"></div>
          <div className="buttons">
            <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1  text-sm font-bold'>Edit</button>
            <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1  text-sm font-bold'>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
