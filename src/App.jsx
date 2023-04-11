import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import JobCatagory from './component/JobCatagory'
import Features from './component/Features'

function App() {

  return (
    <div className="App md:mx-12 mx-5">
    <Header></Header>
    {/* <JobCatagory></JobCatagory> */}
    <Features></Features>
      <Outlet></Outlet>
    </div>
  )
}

export default App
