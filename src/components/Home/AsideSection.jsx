import { useRef, useEffect, useState, useContext } from "react";
import { LoadingData } from "../../context/LoadingContext";
import { LoadingAsideSection } from "./LoadingCard";

export function AsideSection(){
  const { isLoading } = useContext(LoadingData);

  return (
    <aside className="sidebar">
      <SuggestUser />
      <AdjustUserPreferences />
    </aside>
  )
}

function SuggestUser(){

  return (
    <section className="suggestions">
      <h3>Learners Who Need You</h3>
      <ul children="suggested-users">
        <li>
          <span className="small-profile"></span>
          <p>USER ONE</p>
        </li>
        <li>
          <span className="small-profile"></span>
          <p>USER TWO</p>
        </li>
        <li>
          <span className="small-profile"></span>
          <p>USER THREE</p>
        </li>
        <li>
          <span className="small-profile"></span>
          <p>USER FOUR</p>
        </li>
      </ul>
      <div className="show-more-users">
        <button>Show More</button>
      </div>
    </section>
  )
}

function AdjustUserPreferences(){
  const options = {
    subjects: [
      {
        name: "Academic",
        subject: ["Math", "English", "Science", "Test Prep (SAT/College Entrance)"]
      },
      {
        name: "Skills",
        subject: ["Programming / Web Development", "Music", "Arts / Drawing", "Data Science / Analytics",
          "Video Editing / Graphic Design", "Robotics / STEM Projects"
        ]
      },
      {
        name: "Other",
        subject: ["Communication / Public Speaking", "Study Skills / Time Management",
          "Financial Literacy", "Career Mentorship", "Creative Writing", "Entreprenurship / Problem Solving"
        ]
      }
    ],
    levels: ["Adult", "College Student", "Highschool Student", "Gradeschool Student"],
    mode: ["Online", "Face to Face", "Both"]
  }

  return (
    <section className="tutor-preferences">
      <h3>Adjust Tutoring Preferences</h3>
      <div className="your-preferences">
        <div className="input-group-1">
          <Dropdown label="Subject to Teach" 
            options={options.subjects}
          />
          <Dropdown label="Preferred Levels" 
            options={options.levels}
          />

          <div className="input-box">
            <label htmlFor="rate">Preferred Rate</label>
            <input type="text" placeholder="70/hr"/>
          </div>
        </div>

        <div className="input-group-2">
          <Dropdown label="Tutoring Mode" 
            options={options.mode}
          />

          <div className="input-box">
            <label htmlFor="weektime">Availability</label>
            <div className="radio-group">
              <div className="radio-box">
                <input type="radio" name="availability" id="morning" value="morning" />
                <label htmlFor="morning">Morning</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="availability" id="afternoon" value="afternoon" />
                <label htmlFor="afternoon">Afternoon</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="availability" id="evening" value="evening" />
                <label htmlFor="evening">Evening</label>
              </div>
            </div>
            <select name="weektime" id="weektime">
              <option value="" disabled>Select</option>
              <option value="weekdays">Weekdays - M, T, W, T, F</option>
              <option value="weekend">Weekend - Saturday, Sund  ay</option>
            </select>

            <select name="employment" id="employment">
              <option value="part-time">Part-Time</option>
              <option value="full-time">Full-Time</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

function Dropdown({ label, options }) {
  const [ onDropdown, setOnDropdown ] = useState(false);  
  const dropdown = useRef(null);
  const selectedBox = useRef(null);

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (dropdown.current && !dropdown.current.contains(e.target)){
        setOnDropdown(false);
      }
    };
    document.body.addEventListener('click', handleBodyClick);
    return () => document.body.removeEventListener('click', handleBodyClick);
  }, []);

  const toggleDropdown = () => {
    setOnDropdown(!onDropdown);
  };

  const selectValue = (e) => {
    const value = e.target.textContent;
    if(value === 'Academic' || value === 'Skills'
      || value === 'Other'
     ) return;  
    selectedBox.current.textContent = value;
    return;
  };

  const isCategory = Array.isArray(options) && typeof options[0] === "object";

  return (
    <div className="input-box">
      <label>{label}</label>

      <div ref={dropdown} onClick={toggleDropdown} className={`custom-select ${onDropdown ? " active" : ""}`}>
        <div ref={selectedBox} className="select-box">
          Select {label}
        </div>

        <div className="subjects_dropdown" onClick={selectValue}>
          
          {isCategory ? (
            // CATEGORY TYPE (subjects)
            options.map((cat, i) => (
              <div className="category" key={i}>
                <p>{cat.name}</p>
                <div className="subjects">
                  {cat.subject.map((subj, j) => (
                    <div className="subject" key={j}>{subj}</div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // SIMPLE LIST TYPE (levels, mode)
            options.map((item, i) => (
              <div className="subject" key={i}>{item}</div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}
