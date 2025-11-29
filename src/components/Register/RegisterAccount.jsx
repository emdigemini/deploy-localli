import { useState } from "react"

export function RegisterAccount({ setToggleRegister, role }){
  const [ applyPremium, setApplyPremium ] = useState(false);

  return (
    <div className="register-overlay">
      <div className="register_modal-card">
        <i onClick={() => setToggleRegister(false)} class="bi bi-x"></i>
        <p className="kapit-bahay">Kapit <span>Bahay</span></p>
        {applyPremium 
        ? <PremiumAccount role={role} setApplyPremium={setApplyPremium} /> 
        : <FreeAccount role={role} setApplyPremium={setApplyPremium} /> }
      </div>
    </div>
  )
}

function FreeAccount({ role, setApplyPremium }){
  const [ form, setForm ] = useState({
    email: "", name: "",
    password: "", confirmPassword: ""
  })
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  
  const updateField = (key, value) => {
    setForm({...form, [key]: value})
  }

  return (
    <>
      <form action="">
        <h2>Register Free Account</h2>
        <div className="input-group">
          <input onChange={(e) => updateField('email', e.target.value)} id="email" type="email" placeholder=' ' required />
          <label className={`${form.email.length > 0 ? 'up' : ''}`} htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => updateField('name', e.target.value)} id="name" type="name" placeholder=' ' required />
          <label className={`${form.name.length > 0 ? 'up' : ''}`} htmlFor="name">Name</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => updateField('password', e.target.value)} id="password" type={showPassword ? 'text' : 'password'} placeholder=' ' required />
            <label className={`${form.password.length > 0 ? 'up' : ''}`} htmlFor="password">Password</label>
            {form.password.length > 0 && (
              <>
                <div onClick={() => setShowPassword(!showPassword)} className="toggle-show">
                  <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                </div>
              </>
            )}
        </div>
        <div className="input-group">
          <input onChange={(e) => updateField('confirmPassword', e.target.value)} id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder=' ' required />
            <label className={`${form.confirmPassword.length > 0 ? 'up' : ''}`} htmlFor="confirmPassword">Confirm Password</label>
            {form.confirmPassword.length > 0 && (
              <>
                <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-show2">
                  <i className={`${showConfirmPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                </div>
              </>
            )}
        </div>
      <button type="submit">REGISTER ACCOUNT</button>
      {role === 'tutor' && 
          <div className="disclaimer">
            <input id="checkthis" type="checkbox" required />
            <label htmlFor="checkthis">By registering, you agree to provide assistance to students free of charge.</label>
          </div>
          }
      </form>
      <div className="switch-premium">
        <p>Upgrade to Premium <br /> 
          <span>
            {role === 'student' 
              ? "Get prioritized access to top tutors near you."
              : "Stand out in search results, attract more students, and get paid."}
          </span>
        </p>
        <a onClick={() => {setApplyPremium(true)}}>Apply for Premium account</a>
      </div>
    </>
  )
}

function PremiumAccount({ role, setApplyPremium }) {
  const [form, setForm] = useState({
    studentType: "",
    schoolName: "",
    strand: "",
    subjects: "",
    learningMode: "",
    allowance: "",
    contact: "",
    guardian: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

  function updateField(key, value) {
    setForm({ ...form, [key]: value });
  }

  return (
    <>
      <form className="premium-form">
        <h2>Register Your Premium Account</h2>

        <div className="column-grid">
          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.studentType}
              onChange={(e) => updateField("studentType", e.target.value)}
              required
            />
            <label>Type of students</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.schoolName}
              onChange={(e) => updateField("schoolName", e.target.value)}
              required
            />
            <label>School name</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.strand}
              onChange={(e) => updateField("strand", e.target.value)}
              required
            />
            <label>Strand/Course</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.subjects}
              onChange={(e) => updateField("subjects", e.target.value)}
              required
            />
            <label>Subjects you wanna learn</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.learningMode}
              onChange={(e) => updateField("learningMode", e.target.value)}
              required
            />
            <label>Learning mode/Tutoring mode</label>
          </div>

          <div className="input-group">
            <input
              type="number"
              placeholder=" "
              value={form.allowance}
              onChange={(e) => updateField("allowance", e.target.value)}
              required
            />
            <label>Monthly Allowance</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder=" "
              value={form.contact}
              onChange={(e) => updateField("contact", e.target.value)}
              required
            />
            <label>Contact Number</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder=" "
              value={form.guardian}
              onChange={(e) => updateField("guardian", e.target.value)}
            />
            <label>Guardian Contact (Optional)</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              required
            />
            <label>First Name</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              required
            />
            <label>Last Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder=" "
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.username}
              onChange={(e) => updateField("username", e.target.value)}
              required
            />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              value={form.password}
              onChange={(e) => updateField("password", e.target.value)}
              required
            />
            <label>Create Password</label>
            {form.password.length > 0 && (
              <>
                <div onClick={() => setShowPassword(!showPassword)} className="toggle-show2">
                  <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                </div>
              </>
            )}
          </div>

          <div className="input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder=" "
              value={form.confirmPassword}
              onChange={(e) => updateField("confirmPassword", e.target.value)}
              required
            />
            <label>Confirm Password</label>
            {form.confirmPassword.length > 0 && (
              <>
                <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-show2">
                  <i className={`${showConfirmPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                </div>
              </>
            )}
          </div>
        </div>

        <button type="submit">REGISTER ACCOUNT</button>
      </form>

      <div className="switch-premium">
        <p>Stay to Free <br />
          <span>
            {role === 'student' 
              ? "Find tutors, send messages, and start browsing for free."
              : "Find students, send messages, and start teaching for free."}
          </span>
        </p>
        <a onClick={() => setApplyPremium(false)}>Apply for Free Account</a>
      </div>
    </>
  );
}


function ApplicationReviewPopup(){
  return (
    <div className="alert-popup">
      <p>
        Thank you for joining us! <br /> 
        Your application is currently under review.
      </p>
    </div>
  )
}