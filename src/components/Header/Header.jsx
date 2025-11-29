import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { CreatePost } from "../../context/PostContext"
import { useContext, useEffect, useState } from "react"
import { CreatePostUtility } from "../Home/PostFeed"
import { LogoutConfirmation } from "./Navigation"

export function Header(){
  const { createPost } = useContext(CreatePost);
  const [ confirmLogout, setConfirmLogout ] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <>
    <header>
      <div className="side1">
        <Logo />
        <SearchBar />
      </div>
      <div className="side2">
        <Navigation setConfirmLogout={setConfirmLogout} />
        <ContactSupport />
      </div>
      {createPost && <CreatePostUtility />}
      {confirmLogout && <LogoutConfirmation setConfirmLogout={setConfirmLogout} />}
    </header>
    <Outlet />
    </>
  )
}

function Logo(){
  return (
    <div className="logo">
      <div className="first">
        <h2>KAPIT</h2>
      </div>
      <div className="second">
        <h2>BAHAY</h2>
      </div>
    </div>
  )
}

function SearchBar(){
  return (
    <div className="search-bar">
      <input type="text" placeholder="Type to search..." />
      <div className="search-btn">
        <SearchButton />
      </div>
    </div>
  )
}

function SearchButton(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="6">
        <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
        <path strokeLinecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485" />
      </g>
    </svg>
  )
}

function ContactSupport(){
  return (
    <div className="contact-support">
      <p><u>Contact Support</u></p>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 0 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135zM3.161 4.468a6.5 6.5 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137l4.243 4.242l-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192" />
      </svg>
    </div>
  )
}