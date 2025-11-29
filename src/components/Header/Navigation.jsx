import { NotificationList } from "./NotificationList"
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { CheckLogin } from "../../context/LoginContext";
import { LoadingData } from "../../context/LoadingContext";

export function Navigation({ setConfirmLogout }){
  const { setIsLoading } = useContext(LoadingData);

  const [ toggleHome, setToggleHome ] = useState(false);
  const [ toggleCommunity, setToggleCommunity ] = useState(false);
  const [ toggleMessage, setToggleMessage ] = useState(false);
  const [ toggleNotif, setToggleNotif ] = useState(false);
  const [ toggleProfile, setToggleProfile ] = useState(false);

  const home = useRef(null);
  const notifRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // setIsLoading(true);
    const path = location.pathname;
    setToggleHome(path === "/");
    setToggleCommunity(path === "/community");
    setToggleMessage(path === "/messages");
    setToggleProfile(path === "/profile");

    // const setLoading = setTimeout(() => setIsLoading(false), 1500);
    // return () => clearTimeout(setLoading);
  }, [location])

  const toggleEvent = (e) => {
    const toggleTo = e.currentTarget.id;
    switch (toggleTo) {
      case 'community': { navigate("/community"); break; }
      case 'message':{ navigate("/messages"); break; }
      case 'notification': { setToggleNotif(!toggleNotif); break; }
      case 'profile': { navigate("/profile"); break; }
      case 'logout': { setConfirmLogout(true); break; }
      default: { navigate("/"); break; }
    }
  }

  return (
    <>
      <ul className="navigation-bar">
        <li id="home" ref={home}
          style={toggleHome ? { color: "#4993fb" } : {}}
          onClick={(e) => toggleEvent(e)}
        ><Home /></li>
        <li id="community"
          onClick={(e) => toggleEvent(e)}
          style={toggleCommunity ? { color: "#4993fb" } : {}}
        ><Community /></li>
        <li id="message"
          onClick={(e) => toggleEvent(e)}
          style={toggleMessage ? { color: "#4993fb" } : {}}
        ><Message /></li>
        <li id="notification"
          ref={notifRef}
          onClick={(e) => toggleEvent(e)}
          style={toggleNotif ? { color: "#4993fb" } : {}}
        ><Notification /></li>
        <li id="profile" 
          onClick={(e) => toggleEvent(e)}
        ><Profile toggleProfile={toggleProfile} /></li>
        <li id="logout" 
          onClick={(e) => toggleEvent(e)}
        ><Logout /></li>
      </ul>
      {toggleNotif && <NotificationList notifRef={notifRef}
      setToggleNotif={setToggleNotif} />}
    </>
  )
}

export function LogoutConfirmation({ setConfirmLogout }){
  const { setIsLogin } = useContext(CheckLogin);
  const navigate = useNavigate();
  const logoutConfirm = useRef(null);

  const confirmBoxHandler = (e) => {
    if(!logoutConfirm.current.contains(e.target)){
      setConfirmLogout(false);
    } else return;
  }

  function logout(){
    setIsLogin(false); 
    navigate("/");
  }

  return (
    <>
      <div onClick={confirmBoxHandler} className="logout-confirm-box">
        <div ref={logoutConfirm} className="logout-confirm">
          <i onClick={() => setConfirmLogout(false)}
           className="bi bi-x"></i>
          <p>Are you sure you want to log out?</p>
          <button onClick={logout}>Confirm</button>
        </div>
      </div>
    </>
  )
}

function Home(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
      <path fill="currentColor" d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272h16v176c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V272h16c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1zM200 256a56 56 0 1 1 112 0a56 56 0 1 1-112 0m-56 176c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16" />
    </svg>
  )
}

function Community(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28">
      <path fill="currentColor" d="M14 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8M2 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M22.5 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-11.75 7A1.75 1.75 0 0 0 9 14.75V20a5 5 0 0 0 10 0v-5.25A1.75 1.75 0 0 0 17.25 13zM8 14.752l-4.703 1.26a1.75 1.75 0 0 0-1.237 2.144l.841 3.139a5 5 0 0 0 7.088 3.168A6 6 0 0 1 8 20zm10.012 9.71q.455.23.966.369a5 5 0 0 0 6.124-3.536l.841-3.14a1.75 1.75 0 0 0-1.237-2.143L20 14.752V20a6 6 0 0 1-1.988 4.462" />
    </svg>
  )
}

function Message(){
  return (
    <div className="message">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
      </svg>
    </div>

  )
}

function Notification(){
  return (
    <div className="notification">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M23 4.5C23 6.43 21.43 8 19.5 8S16 6.43 16 4.5S17.57 1 19.5 1S23 2.57 23 4.5M19.5 10A5.51 5.51 0 0 1 14 4.5c0-.5.08-1 .21-1.5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V9.79c-.5.13-1 .21-1.5.21" />
      </svg>
    </div>

  )
}

function Profile({ toggleProfile }){
  return (
    <div className="profile"
      style={toggleProfile ? { background: "#4993fb" } : {}}
    ></div>
  )
}

function Logout(){
  return (
    <div className="log-out">
      <div className="logout">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z" />
        </svg>
        <p className="logout-text">LOG OUT</p>
      </div>
    </div>
  )
}