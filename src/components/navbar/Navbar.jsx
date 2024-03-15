import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  const [active,setActive] = useState(false)    // if false navbar green else white
  const [open,setOpen] = useState(false)

  const {pathname} = useLocation()
  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll" , isActive);
    return ()=>{
      window.removeEventListener("scroll" , isActive);
    };
  },[]);

  const currentUser = {
    id:1,
    username:"Adil Rasheed",
    isSeller: true
  }
  //it sets navbar if not homepage then white else green👇
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}> 
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
          <span className='text'>Fiverr</span>
          <span className='text2'> India</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser &&(
          <div className="user" onClick={()=> setOpen(!open)}>
            <img src="./public/img/dp.png" alt="user image" />
            <span>{currentUser?.username}</span>
            {open && <div className="options">
            {
              currentUser?.isSeller &&(
                <>
                <Link className='link' to="/mygigs">Gigs</Link>
                <Link className='link' to="/add">Add New Gigs</Link>
                </>
              )}
               <Link className='link' to="/orders">Orders</Link>
               <Link className='link' to="/messages">Messages</Link>
               <Link className='link' to="/">Logout</Link>
            </div>}
          </div>
          )}
          
        </div>
      </div>
      {(active || pathname !== "/") &&(
        <>
      <hr />
      <div className="menu">
      <Link className='link menulink' to="/">
      Graphics & Design
      </Link>
      <Link className='link' to="/">
      Video & Animation
      </Link>
      <Link className='link' to="/">
      Writing & Translation
      </Link>
      <Link className='link' to="/">
      AI Services
      </Link>
      <Link className='link' to="/">
      Digital Marketing
      </Link>
      <Link className='link' to="/">
      Music & Audio
      </Link>
      <Link className='link' to="/">
      Programming & Tech
      </Link>
      <Link className='link' to="/">
      Business
      </Link>
      <Link className='link' to="/">
      Life Style
      </Link>
      
      </div>
      </>
      )}
    </div>
  )
}

export default Navbar