import React from 'react'
import SignIn from './Comp/SignUp'
import Nav from './Comp/Nav'
import { Link } from "react-router-dom"
import Login, { LogIn } from './Comp/LogIn'
import './App.css'

export const App = () => {
  return (
    <>
    <div className='MainCont'></div>
    <Nav/>
    </>
  )
}
export default App;