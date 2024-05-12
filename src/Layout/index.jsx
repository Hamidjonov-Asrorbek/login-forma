import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './style.css'

export default function Layout() {
  const navigate = useNavigate();
  function LogOut(){
    localStorage.setItem('user', JSON.stringify(false));
    navigate('/')
  }
  return (
    <>
        <header><h1>WELCOME TO SITE 👋</h1>
          <button onClick={LogOut} className='log-out'><i className="fa-solid fa-right-from-bracket"></i> Log Out </button>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
  )
}