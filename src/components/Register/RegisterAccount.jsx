import { useState } from "react"

export function RegisterAccount({ setToggleRegister, role }){
  const [ applyPremium, setApplyPremium ] = useState( );

  return (
    <div className="register-overlay">
      <div className="register_modal-card">
        <i onClick={() => setToggleRegister(false)} className="bi bi-x"></i>
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
    role,
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

  return (
    <>
      {role === 'student' 
        ? <ForStudent setApplyPremium={setApplyPremium} />
        : <ForTutor setApplyPremium={setApplyPremium} />
      }
    </>
  );
}

function ForStudent({ setApplyPremium }){
  const [form, setForm] = useState({
    studentType: "",
    schoolName: "",
    course: "",
    strand: "",
    gradeLevel: "",
    subjects: "",
    learningMode: "",
    allowance: "",
    contact: "",
    guardian: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  const [studentTypeSelect, setStudentTypeSelect] = useState(false);
  const [courseSelect, setCourseSelect] = useState(false);
  const [strandSelect, setStrandSelect] = useState(false);
  const [gradeSelect, setGradeSelect] = useState(false);
  const [modeSelect, setModeSelect] = useState(false);
  const [genderSelect, setGenderSelect] = useState(false);

  const studentTypeLabel = (value) => {
    switch(value){
      case "self-study": return "Self Study";
      case "college": return "College";
      case "senior-high": return "Senior High";
      case "high-school": return "High School";
      case "elementary": return "Elementary **(Parent Account)**";
      default: return "Select Student Type";
    }
  };

  const courseLabel = (value) => {
    switch(value){
      case "bsa": return "BS Accountancy (BSA)";
      case "bsba": return "BS Business Administration (BSBA)";
      case "bse": return "BS Entrepreneurship (BSE)";
      case "bsfm": return "BS Financial Management (BSFM)";
      case "bsit": return "BS Information Technology (BSIT)";
      case "bscs": return "BS Computer Science (BSCS)";
      case "bsis": return "BS Information Systems (BSIS)";
      case "bsed-math": return "BSEd Major in Math (BSED-MATH)";
      case "bsed-eng": return "BSEd Major in English (BSED-ENG)";
      case "bsed-sci": return "BSEd Major in Science (BSED-SCI)";
      case "bsed-filipino": return "BSEd Major in Filipino (BSED-FIL)";
      case "bsed-social": return "BSEd Major in Social Studies (BSED-SOC)";
      case "bapsych": return "BS Psychology (BSPSYCH)";
      case "ba-english": return "BA English (BA-ENG)";
      case "ba-filipino": return "BA Filipino (BA-FIL)";
      case "ba-communication": return "BA Communication (BA-COMM)";
      case "ba-history": return "BA History (BA-HISTORY)";
      case "ba-economics": return "BA Economics (BA-ECO)";
      case "bshm": return "BS Hospitality Management (BSHM)";
      case "bsn": return "BS Nursing (BSHN)";

      default: return "Select Course";
    }
  }

  const strandLabel = (value) => {
    switch(value){
      case "stem": return "STEM (Academic)";
      case "abm": return "ABM (Academic)";
      case "humss": return "HUMSS (Academic)";
      case "h-e": return "HE (TVL)";
      case "ict": return "ICT (TVL)";
      case "i-a": return "IA (TVL)";
      case "afa": return "AFA (TVL)";
      default: return "Select Strand";
    }
  };

  const gradeLabel = (value) => {
    switch(value) {
      case "g10": return "Grade 10 (High School)";
      case "g9": return "Grade 9 (High School)";
      case "g8": return "Grade 8 (High School)";
      case "g7": return "Grade 7 (High School)";
      case "g6": return "Grade 6 (Elementary)";
      case "g5": return "Grade 5 (Elementary)";
      case "g4": return "Grade 4 (Elementary)";
      case "g3": return "Grade 3 (Elementary)";
      case "g2": return "Grade 2 (Elementary)";
      case "g1": return "Grade 1 (Elementary)";
      default: return "Select Grade Level";
    }
  };

  const modeLabel = (value) => {
    switch(value){
      case "online": return "Online";
      case "f2f": return "Face to Face";
      case "hybrid": return "Hybrid";
      default: return "Select Learning/Teaching Mode";
    }
  }

  const genderLabel = (value) => {
    switch(value){
      case "male": return "Male";
      case "female": return "Female";
      case "n/a": return "Preferred not to say";
      default: return "Select Gender";
    }
  }

  function chooseStudentType(value) {
    updateField("studentType", value);
    setStudentTypeSelect(false);
  }

  function chooseCourse(value){
    updateField("course", value);
    setCourseSelect(false);
  }

  function chooseStrand(value){
    updateField("strand", value);
    setStrandSelect(false);
  }

  function chooseLevel(value){
    updateField("strand", value);
    setGradeSelect(false);
  }

  function chooseMode(value){
    updateField("learningMode", value);
    setModeSelect(false);
  }

  function chooseGender(value){
    updateField("gender", value);
    setGenderSelect(false);
  }

  function updateField(key, value) {
    setForm({ ...form, [key]: value });
  }

  const collegeProps = {
    form,
    courseLabel,
    courseSelect,
    chooseCourse,
    setCourseSelect
  };

  const seniorHighProps = {
    form,
    strandLabel,
    strandSelect,
    chooseStrand,
    setStrandSelect
  };

  const gradeLevelProps = {
    form,
    gradeLabel,
    gradeSelect,
    chooseLevel,
    setGradeSelect
  };

  const learningModeProps = {
    form, 
    modeLabel, 
    modeSelect, 
    chooseMode, 
    setModeSelect 
  };

  const genderProps = {
    form, 
    genderLabel, 
    genderSelect, 
    chooseGender, 
    setGenderSelect 
  }

  return (
    <>
      <form className="premium-form">
        <h2>Register Your Premium Account</h2>

        <div className="column-grid">
          <div className="input-group custom-select-group">
            <div
              className="custom-select-display"
              onClick={() => setStudentTypeSelect(!studentTypeSelect)}
            >
              {form.studentType
                ? studentTypeLabel(form.studentType)
                : "Select Student Type"}

              <i className={`bi bi-chevron-${studentTypeSelect ? "up" : "down"}`}></i>
            </div>

            {studentTypeSelect && (
              <ul className="custom-select-options">
                <li onClick={() => chooseStudentType("self-study")}>Self Study</li>
                <li onClick={() => chooseStudentType("college")}>College</li>
                <li onClick={() => chooseStudentType("senior-high")}>Senior High</li>
                <li onClick={() => chooseStudentType("high-school")}>High School</li>
                <li onClick={() => chooseStudentType("elementary")}>
                  Elementary **(Parent Account)**
                </li>
              </ul>
            )}
          </div>

          {form.studentType === ""
          ? null
          : form.studentType === "self-study"
          ? null
          :<div className="input-group">
              <input
                type="text"
                placeholder=" "
                value={form.schoolName}
                onChange={(e) => updateField("schoolName", e.target.value)}
                required
              />
              <label>School name</label>
            </div>
          }

          {form.studentType === "college" 
          ? <SelectCourse {...collegeProps} />
          : form.studentType === "senior-high"
          ? <SelectStrand {...seniorHighProps} />
          : form.studentType === "high-school"
          ? <SelectHighSchoolLevel {...gradeLevelProps} />
          : form.studentType === "elementary"
          ? <SelectElementaryLevel {...gradeLevelProps} />
          : null}

          
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

          <LearningMode {...learningModeProps} />

          <div className="input-group">
            <input
              type="number"
              placeholder=" "
              value={form.allowance}
              onChange={(e) => updateField("allowance", e.target.value)}
              required
            />
            <label>Monthly allowance</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder=" "
              value={form.contact}
              onChange={(e) => updateField("contact", e.target.value)}
              required
            />
            <label>Contact number</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder=" "
              value={form.guardian}
              onChange={(e) => updateField("guardian", e.target.value)}
            />
            <label>Guardian contact (Optional)</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              required
            />
            <label>First name</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              required
            />
            <label>Last name</label>
          </div>

          <SelectGender {...genderProps} />

          <div className="input-group">
            <input
              type="number"
              placeholder=" "
              value={form.age}
              onChange={(e) => updateField("age", e.target.value)}
              required
            />
            <label>Age</label>
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
            <label>Create username</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              value={form.password}
              onChange={(e) => updateField("password", e.target.value)}
              required
            />
            <label>Create password</label>
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
            <label>Confirm password</label>
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
            Find tutors, send messages, and start browsing for free.
          </span>
        </p>
        <a onClick={() => setApplyPremium(false)}>Apply for Free Account</a>
      </div>
    </>
  )
}

function SelectCourse({ form, courseLabel, courseSelect, chooseCourse, setCourseSelect }){
  const allCourses = [
    { value: "bsa", label: "BS Accountancy (BSA)" },
    { value: "bsba", label: "BS Business Administration (BSBA)" },
    { value: "bse", label: "BS Entrepreneurship (BSE)" },
    { value: "bsfm", label: "BS Financial Management (BSFM)" },
    { value: "bsit", label: "BS Information Technology (BSIT)" },
    { value: "bscs", label: "BS Computer Science (BSCS)" },
    { value: "bsis", label: "BS Information System (BSIS)" },
    { value: "bshm", label: "BS Hospitality Management (BSHM)" },
    { value: "bsn", label: "BS Nursing (BSN)" },
    { value: "bsed-math", label: "BSEd Major in Math (BSED-MATH)" },
    { value: "bsed-eng", label: "BSEd Major in English (BSED-ENG)" },
    { value: "bspsych", label: "BS Psychology (BSPSYCH)" },
    { value: "bsbio", label: "BS Biology (BSBIO)" },
    { value: "bschem", label: "BS Chemistry (BSCHEM)" },
  ];

  return (
    <div className="input-group custom-select-group">
      <div
        className="custom-select-display"
        onClick={() => setCourseSelect(!courseSelect)}
      >
        {form.strand
          ? courseLabel(form.course)
          : "Select Course"}

        <i className={`bi bi-chevron-${courseSelect ? "up" : "down"}`}></i>
      </div>

      {courseSelect && (
        <ul className="custom-select-options">
          {allCourses.map((c) => (
            <li key={c.value} onClick={() => chooseCourse(c.value)}>
              {c.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SelectStrand({ form, strandLabel, strandSelect, chooseStrand, setStrandSelect }){
  return (
    <div className="input-group custom-select-group">
      <div
        className="custom-select-display"
        onClick={() => setStrandSelect(!strandSelect)}
      >
        {form.strand
          ? strandLabel(form.strand)
          : "Select Strand"}

        <i className={`bi bi-chevron-${strandSelect ? "up" : "down"}`}></i>
      </div>

      {strandSelect && (
        <ul className="custom-select-options">
          <li onClick={() => chooseStrand("stem")}>STEM (Academic)</li>
          <li onClick={() => chooseStrand("abm")}>ABM (Academic)</li>
          <li onClick={() => chooseStrand("humss")}>HUMSS (Academic)</li>
          <li onClick={() => chooseStrand("h-e")}>HE (TVL)</li>
          <li onClick={() => chooseStrand("ict")}>ICT (TVL)</li>
          <li onClick={() => chooseStrand("i-a")}>IA (TVL)</li>
          <li onClick={() => chooseStrand("afa")}>AFA (TVL)</li>
        </ul>
      )}
    </div>
  )
}

function SelectHighSchoolLevel({ form, gradeLabel, gradeSelect, chooseLevel, setGradeSelect }){
  return (
    <div className="input-group custom-select-group">
      <div
        className="custom-select-display"
        onClick={() => setGradeSelect(!gradeSelect)}
      >
        {form.strand
          ? gradeLabel(form.strand)
          : "Select Grade Level"}

        <i className={`bi bi-chevron-${gradeSelect ? "up" : "down"}`}></i>
      </div>

      {gradeSelect && (
        <ul className="custom-select-options">
          <li onClick={() => chooseLevel("g10")}>Grade 10 (High School)</li>
          <li onClick={() => chooseLevel("g9")}>Grade 9 (High School)</li>
          <li onClick={() => chooseLevel("g8")}>Grade 8 (High School)</li>
          <li onClick={() => chooseLevel("g7")}>Grade 7 (High School)</li>
        </ul>
      )}
    </div>
  )
}

function SelectElementaryLevel({ form, gradeLabel, gradeSelect, chooseLevel, setGradeSelect }){
  return (
    <div className="input-group custom-select-group">
      <div
        className="custom-select-display"
        onClick={() => setGradeSelect(!gradeSelect)}
      >
        {form.strand
          ? gradeLabel(form.strand)
          : "Select Grade Level"}

        <i className={`bi bi-chevron-${gradeSelect ? "up" : "down"}`}></i>
      </div>

      {gradeSelect && (
        <ul className="custom-select-options">
          <li onClick={() => chooseLevel("g6")}>Grade 6 (Elementary)</li>
          <li onClick={() => chooseLevel("g5")}>Grade 5 (Elementary)</li>
          <li onClick={() => chooseLevel("g4")}>Grade 4 (Elementary)</li>
          <li onClick={() => chooseLevel("g3")}>Grade 3 (Elementary)</li>
          <li onClick={() => chooseLevel("g2")}>Grade 2 (Elementary)</li>
          <li onClick={() => chooseLevel("g1")}>Grade 1 (Elementary)</li>
        </ul>
      )}
    </div>
  )
}

function LearningMode({ form, modeLabel, modeSelect, chooseMode, setModeSelect }){
  return (
    <div className="input-group custom-select-group">
      <div
        className="custom-select-display"
        onClick={() => setModeSelect(!modeSelect)}
      >
        {form.learningMode
          ? modeLabel(form.learningMode)
          : "Select Learning/Teaching Mode"}

        <i className={`bi bi-chevron-${modeSelect ? "up" : "down"}`}></i>
      </div>

      {modeSelect && (
        <ul className="custom-select-options">
          <li onClick={() => chooseMode("online")}>Online</li>
          <li onClick={() => chooseMode("f2f")}>Face to Face</li>
          <li onClick={() => chooseMode("hybrid")}>Hybrid</li>
        </ul>
      )}
    </div>
  )
}

function SelectGender({ form, genderLabel, genderSelect, chooseGender, setGenderSelect }){
  return (
    <div className="input-group custom-select-group">
      <div
        className="custom-select-display"
        onClick={() => setGenderSelect(!genderSelect)}
      >
        {form.gender
          ? genderLabel(form.gender)
          : "Select Gender"}

        <i className={`bi bi-chevron-${genderSelect ? "up" : "down"}`}></i>
      </div>

      {genderSelect && (
        <ul className="custom-select-options">
          <li onClick={() => chooseGender("male")}>Male</li>
          <li onClick={() => chooseGender("female")}>Female</li>
          <li onClick={() => chooseGender("n/a")}>Preferred not to say</li>
        </ul>
      )}
    </div>
  )
}

function ForTutor({ setApplyPremium }){
  const [form, setForm] = useState({
    studentType: "",
    schoolName: "",
    course: "",
    strand: "",
    gradeLevel: "",
    subjects: "",
    learningMode: "",
    allowance: "",
    contact: "",
    guardian: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  const [studentTypeSelect, setStudentTypeSelect] = useState(false);
  const [modeSelect, setModeSelect] = useState(false);
  const [genderSelect, setGenderSelect] = useState(false);

  const studentTypeLabel = (value) => {
    switch(value){
      case "self-study": return "Self Study";
      case "college": return "College";
      case "senior-high": return "Senior High";
      case "high-school": return "High School";
      case "elementary": return "Elementary";
      case "anyone": return "Anyone";
      default: return "Preferred Student";
    }
  };

  const modeLabel = (value) => {
    switch(value){
      case "online": return "Online";
      case "f2f": return "Face to Face";
      case "hybrid": return "Hybrid";
    }
  }

  const genderLabel = (value) => {
    switch(value){
      case "male": return "Male";
      case "female": return "Female";
      case "n/a": return "Preferred not to say";
      default: return "Select Gender";
    }
  }

  function chooseStudentType(value) {
    updateField("studentType", value);
    setStudentTypeSelect(false);
  }

  function chooseMode(value){
    updateField("learningMode", value);
    setModeSelect(false);
  }

  function chooseGender(value){
    updateField("gender", value);
    setGenderSelect(false);
  }

  function updateField(key, value) {
    setForm({ ...form, [key]: value });
  }

  const learningModeProps = {
    form, 
    modeLabel, 
    modeSelect, 
    chooseMode, 
    setModeSelect 
  };

  const genderProps = {
    form, 
    genderLabel, 
    genderSelect, 
    chooseGender, 
    setGenderSelect 
  }

  return (
    <>
      <form className="premium-form">
        <h2>Register Your Premium Account</h2>

        <div className="column-grid">
          <div className="input-group custom-select-group">
            <div
              className="custom-select-display"
              onClick={() => setStudentTypeSelect(!studentTypeSelect)}
            >
              {form.studentType
                ? studentTypeLabel(form.studentType)
                : "Preferred Student"}

              <i className={`bi bi-chevron-${studentTypeSelect ? "up" : "down"}`}></i>
            </div>

            {studentTypeSelect && (
              <ul className="custom-select-options">
                <li onClick={() => chooseStudentType("self-study")}>Self Study</li>
                <li onClick={() => chooseStudentType("college")}>College</li>
                <li onClick={() => chooseStudentType("senior-high")}>Senior High</li>
                <li onClick={() => chooseStudentType("high-school")}>High School</li>
                <li onClick={() => chooseStudentType("elementary")}>Elementary</li>
                <li onClick={() => chooseStudentType("anyone")}>Anyone</li>
              </ul>
            )}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.subjects}
              onChange={(e) => updateField("subjects", e.target.value)}
              required
            />
            <label>Subjects you wanna teach</label>
          </div>

          <LearningMode {...learningModeProps} />

          <div className="input-group">
            <input
              type="number"
              placeholder=" "
              value={form.allowance}
              onChange={(e) => updateField("allowance", e.target.value)}
              required
            />
            <label>Preferred rate</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder=" "
              value={form.contact}
              onChange={(e) => updateField("contact", e.target.value)}
              required
            />
            <label>Contact number</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              required
            />
            <label>First name</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              required
            />
            <label>Last name</label>
          </div>

          <SelectGender {...genderProps} />

          <div className="input-group">
            <input
              type="number"
              placeholder=" "
              value={form.age}
              onChange={(e) => updateField("age", e.target.value)}
              required
            />
            <label>Age</label>
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
            <label>Create username</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              value={form.password}
              onChange={(e) => updateField("password", e.target.value)}
              required
            />
            <label>Create password</label>
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
            <label>Confirm password</label>
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
            Find students, send messages, and start teaching for free.
          </span>
        </p>
        <a onClick={() => setApplyPremium(false)}>Apply for Free Account</a>
      </div>
    </>
  )
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