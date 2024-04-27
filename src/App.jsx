
import { Link, Outlet } from 'react-router-dom'
import './App.css'



  function App() {

 
  return (
    <>
    <div>Я App</div>
    <Link to= '/'> Вернуться обратно</Link>
  <Link to ='/menu'>Зайти в меню</Link>
  <Outlet/>
    </>

  )
}

export default App
