import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import JobCatagory from './component/JobCatagory'
import Features from './component/Features'

function App() {

  return (
    <div className="App">
    <Outlet></Outlet>
    </div>
  )
}

export default App
