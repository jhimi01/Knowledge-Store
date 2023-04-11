import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import JobCatagory from './component/JobCatagory'

function App() {

  return (
    <div className="App">
    <Header></Header>
    <JobCatagory></JobCatagory>
      <Outlet></Outlet>
    </div>
  )
}

export default App
