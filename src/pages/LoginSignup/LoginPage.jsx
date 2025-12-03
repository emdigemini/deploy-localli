import AOS from "aos";
import { useState, useEffect, useContext } from 'react'
import { CheckLogin } from "../../context/LoginContext";
import { RegisterAccount } from "../../components/Register/RegisterAccount";

export function LoginPage(){
  const [ role, setRole ] = useState("");
  const [ toggleRegister, setToggleRegister ] = useState(false);
  const [ switched, setSwitched ] = useState(false);
  const [ wasSwitched, setWasSwitched ] = useState(false);
  const [ demoMode, setDemoMode ] = useState(false);
  const [ toggleSwitch, setToggleSwitch ] = useState(true);

  function switchPage(){
    setWasSwitched(switched);
    setSwitched(!switched);
  }

  useEffect(() => {
    AOS.refresh();
  }, [switched]);

  const loginProps = {
    setDemoMode, setSwitched, toggleSwitch,
    setToggleSwitch, setToggleRegister, setRole
  }

  return (
    <>
      <div className="login-page">
        <div onClick={switchPage} className={
          `orange-box ${switched ? 'switch' 
          : wasSwitched ? 'unswitch' : ''}`
          }>
          {!switched
          ? <OrangeBox_Students />
          : <OrangeBox_Tutors />
          }
        </div>

        <div className={
          `login-box ${switched ? 'switch' 
          : wasSwitched ? 'unswitch' : ''}`
          }>
          {!switched 
          ? <LoginStudents {...loginProps} />
          : <LoginTutors {...loginProps} />
          }
        </div>
      </div>
      {toggleRegister && <RegisterAccount setToggleRegister={setToggleRegister}
      role={role} />}
      {demoMode && <DemoMessageState setDemoMode={setDemoMode} />}
    </>
  )
}

function OrangeBox_Students(){
  return (
    <>
      <div className="orange-box_headings"
        data-aos="zoom-in-down"
      >
      <h1>WANT TO <br /> BE A TUTOR?</h1>
        <a id='switch-box' href='#'>Switch here and find your learners.</a>
      </div>
      <div className="orange-box_img"
        data-aos="zoom-in-up"
      >
        <img className="find-tutor" src="image/6611984.webp" draggable="false" />
      </div>
    </>
  )
}

function OrangeBox_Tutors(){
  return (
    <>
      <div className="orange-box_headings"
        data-aos="zoom-in-down"
      >
        <h1>WANT TO <br /> HIRE A TUTOR?</h1>
        <a id='switch-box' href='#'>Switch here to find one.</a>
      </div>
      <div className="orange-box_img"
        data-aos="zoom-in-up"
      >
        <img src="image/4600945.webp" draggable="false" />
      </div>
    </>
  )
}

function LoginStudents({ setDemoMode, setSwitched, toggleSwitch, setToggleSwitch, setToggleRegister, setRole }){
  const [value1, setValue1] = useState("");
  const [password, setPassword] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    setRole("student");
  }, [])

  const switchProps = {
    setSwitched, toggleSwitch, setToggleSwitch
  }

  return (
    <>
      <div className="login-box__header"
        data-aos="zoom-in"
        data-aos-duration="400"
      >
        <h1>LOOKING FOR A TUTOR?</h1>
        <h2>Find trusted tutors in your community and start learning faster.</h2>
      </div>

      <div className="input-box" 
        data-aos="zoom-in"
        data-aos-duration="400"
        >
        <div className="input-group">
          <input onChange={(e) => setValue1(e.target.value)} id="email_username" type="text" placeholder=' ' required />
          <label className={`${value1.length > 0 ? 'up' : ''}`} htmlFor="email_username">Email or username</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? 'text' : 'password'} placeholder=' ' required />
          <label className={`${password.length > 0 ? 'up' : ''}`} htmlFor="password">Password</label>
          {password.length > 0 && (
            <>
              <div onClick={showPass} className="toggle-pass">
                <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
              </div>
            </>
          )}
        </div>
        <div className="auth-links">
          <a href='#'>Forgot password?</a>
          <a href='#'>Don't have an account?</a>
        </div>
        <div className="btn-group">
          <button className='login-btn' 
            onClick={() => setDemoMode(true)}
          >DEMO VERSION</button>
          <button className='signup-btn'
            onClick={() => setToggleRegister(true)}>REGISTER</button>
        </div>
      </div>

      <SwitchLogin {...switchProps} />

      <a id='contact-support' href="#">Contact support.</a>
    </>
  )
}

function LoginTutors({ setDemoMode, setSwitched, toggleSwitch, setToggleSwitch, setToggleRegister, setRole }){
  const [value1, setValue1] = useState("");
  const [password, setPassword] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    setRole("tutor");
  }, [])

  const switchProps = {
    setSwitched, toggleSwitch, setToggleSwitch
  }

  return (
    <>
      <div className="login-box__header"
        data-aos="zoom-in"
        data-aos-duration="400"
      >
        <h1>GOT A SKILLS TO TEACH?</h1>
        <h2>Share your knowledge, connect with learners and get paid.</h2>
      </div>

      <div className="input-box" 
        data-aos="zoom-in"
        data-aos-duration="400"
        >
        <div className="input-group">
          <input onChange={(e) => setValue1(e.target.value)} id="email_username" type="text" placeholder=' ' required />
          <label className={`${value1.length > 0 ? 'up' : ''}`} htmlFor="email_username">Email or username</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? 'text' : 'password'} placeholder=' ' required />
          <label className={`${password.length > 0 ? 'up' : ''}`} htmlFor="password">Password</label>
          {password.length > 0 && (
            <>
              <div onClick={showPass} className="toggle-pass">
                <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
              </div>
            </>
          )}
        </div>
        <div className="auth-links">
          <a href='#'>Forgot password?</a>
          <a href='#'>Don't have an account?</a>
        </div>
        <div className="btn-group">
          <button className='login-btn'
            onClick={() => setDemoMode(true)}
          >DEMO VERSION</button>
          <button className='signup-btn'
            onClick={() => setToggleRegister(true)}>REGISTER</button>
        </div>
      </div>

      <SwitchLogin {...switchProps} />

      <a id='contact-support' href="#">Contact support.</a>
    </>
  )
}

function SwitchLogin({ setSwitched, toggleSwitch, setToggleSwitch }){
  function handleToggle(){
    setToggleSwitch(!toggleSwitch);
    setSwitched(toggleSwitch);
  }
  return (
    <div className="toggle-container" onClick={handleToggle}>
      <p className="toggle-text">Switch to {toggleSwitch ? "Tutor Mode" : "Student Mode"}</p>
    </div>
  )
}

function DemoMessageState({ setDemoMode }){
  const { setIsLogin } = useContext(CheckLogin);

  const nav = () => {
    setIsLogin(true);
    setDemoMode(false);
  }

  return (
    <div className="demo-message-box">
      <div className="demo-message">
        <p>
          You are now using the demo mode of this app. <br />
          In this version, you can try the basic features such as:
        </p>
        <ul>
          <li>Post anything in the community feed</li>
          <li>Checking messages</li>
          <li>Viewing notifications</li>
          <li>Exploring the community page to find tutors or students</li>
          <li>Browsing sample profiles and posts</li>
        </ul>
        <p>
          This demo is meant to show how the platform works.
          Some features are temporarily unavailable while the website/app is still under development.
        </p>
        <button onClick={nav}>
          CONTINUE
        </button>
      </div>
    </div>
  )
}