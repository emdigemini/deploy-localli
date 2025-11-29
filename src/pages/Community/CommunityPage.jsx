export function CommunityPage(){
  return (
    <div className="community-container">

      <div className="header">
          <p>Connect with Learners<br/>and Tutors Near You <LocationIcon /></p>
          <p><HandshakeIcon /><span>Your Kapit Bahay</span></p>
      </div>

      <div className="grid">

          <div className="card">
            <div className="top">
              <div className="top-left">
                <div className="pfp"></div>
                <div>
                  <div className="role">Student</div>
                  <div className="name">John Lloyd V. Dela Cruz</div>
                  <div className="distance">4 km away</div>
                </div>
              </div>
              <div className="top-right">
                <div className="age">Age: 20</div>
                <div className="course"><b>Course:</b> BS - Information Technology</div>
                <div className="course"><b>College:</b> Student at East System Colleges of Rizal</div>
              </div>
            </div>
            <div className="desc">
                Hi! I'm looking for a tutor to help me improve my database skills. I want to learn how to design, query, and manage databases effectively. I'm eager to practice, ask questions, and gain confidence with guidance from someone experienced.
            </div>
          </div>

          <div className="card">
            <div className="top">
              <div className="top-left">
                <div className="pfp"></div>
                <div>
                  <div className="role">Student</div>
                  <div className="name">John Lloyd V. Dela Cruz</div>
                  <div className="distance">4 km away</div>
                </div>
              </div>
              <div className="top-right">
                <div className="age">Age: 20</div>
                <div className="course"><b>Course:</b> BS - Information Technology</div>
                <div className="course"><b>College:</b> Student at East System Colleges of Rizal</div>
              </div>
            </div>
            <div className="desc">I'm a BS Information Technology student looking for a tutor specializing in Java Programming. I need help understanding complex concepts, practicing coding exercises, and applying them in real scenarios. I'm eager to learn, open to different teaching styles, and looking for someone who can guide me step-by-step and help build my confidence in Java.</div>
          </div>

          <div className="card">
            <div className="top">
              <div className="top-left">
                <div className="pfp"></div>
                <div>
                  <div className="role">Student</div>
                  <div className="name">Jaworski B. Bautista</div>
                  <div className="distance">3 km away</div>
                </div>
              </div>
              <div className="top-right">
                <div className="age">Age: 20</div>
                <div className="course"><b>Course:</b> BS - Information Technology</div>
                <div className="course"><b>College:</b> Student at STI College<br/>Tanay Rizal</div>
              </div>
            </div>
            <div className="desc">
                Hi! I'm a BS Computer Science student looking for a tutor to help me master algorithms, data structures, and advanced CS concepts. I want to understand them deeply, apply them in real projects, and tackle challenging problems with guidance.
            </div>
          </div>

          <div className="card">
            <div className="top">
              <div className="top-left">
                <div className="pfp"></div>
                <div>
                  <div className="role">Student</div>
                  <div className="name">Maria S. Puerta</div>
                  <div className="distance">7 km away</div>
                </div>
              </div>
              <div className="top-right">
                <div className="age">Age: 20</div>
                <div className="course"><b>Course:</b> BS - Information Technology</div>
                <div className="course"><b>College:</b> Student at STI College<br/>Tanay Rizal</div>
              </div>
            </div>
            <div className="desc">
                Passionate about Business Administration, I'm looking for a tutor to help me master Financial Analysis and Digital Marketing. I want to understand the concepts clearly, apply them in real-world scenarios, and strengthen my skills through practical exercises. I'm eager to learn and ready to put in the work.
            </div>
          </div>
            <div className="card">
            <div className="top">
              <div className="top-left">
                <div className="pfp"></div>
                <div>
                  <div className="role">Student</div>
                  <div className="name">John Lloyd V. Dela Cruz</div>
                  <div className="distance">465 m away</div>
                </div>
              </div>
              <div className="top-right">
                <div className="age">Age: 20</div>
                <div className="course"><b>Course:</b> BS - Information Technology</div>
                <div className="course"><b>College:</b> Student at STI College<br/>Tanay Rizal</div>
              </div>
            </div>
            <div className="desc">
                I'm looking for a tutor to help my Grade 3 child improve their skills and confidence in school. My child needs guidance with understanding lessons, practicing exercises, and applying what they learn in a fun and engaging way. We're hoping to find a tutor who is patient, explains concepts clearly, and can support my child step-by-step while making learning enjoyable.
            </div>
          </div>

          <div className="card">
            <div className="top">
              <div className="top-left">
                <div className="pfp"></div>
                <div>
                  <div className="role">Tutor</div>
                  <div className="name">James K. Lebron</div>
                  <div className="distance">6 km away</div>
                </div>
              </div>
              <div className="top-right">
                <div className="age">Age: 20</div>
                <div className="course"><b>Course:</b> BS - Information Technology</div>
                <div className="work"><b>College:</b> Google PH / Accenture /  Orange & Bronze</div>
              </div>
            </div>
            <div className="desc">
                I'm seeking a partner to collaborate on building a full stack website. With over 10 years of full stack development experience and a background at Google PH, Accenture, and Orange & Bronze, I'm looking for someone to work closely with me, contribute ideas, and help implement the project efficiently and effectively.
            </div>
          </div>

      </div>

  </div>
  )
}

function HandshakeIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd" clipRule="evenodd">
        <path fill="#0C6FFF" d="M2.307 12.161c1 .76 1.71.05.94-.79l-.08-.08a6 6 0 0 0-.52-.439c-.19-.14-.39-.26-.59-.38a8.6 8.6 0 0 0-1.519-.67a.373.373 0 0 0-.33.67c.43.29.79.66 1.2 1q.395.35.83.65z" />
        <path fill="#F96900" d="M11.994 17.61a.371.371 0 1 0-.7.25a1.12 1.12 0 0 1-.89 1.309a1.1 1.1 0 0 1-.51-.11a1.4 1.4 0 0 1-.46-.29a4 4 0 0 1-.25-.29a.8.8 0 0 1-.1-.23a.82.82 0 0 1 .08-.56c.07-.07.12-.14.18-.21a1.1 1.1 0 0 1 .31-.29a1.35 1.35 0 0 1 1.48 0a.33.33 0 0 0 .46-.47a2 2 0 0 0-1.93-.54a1.7 1.7 0 0 0-.07-.459a.38.38 0 0 0-.696-.039a.37.37 0 0 0-.013.289a.84.84 0 0 1 0 .52a2 2 0 0 0-.74.74a.6.6 0 0 1-.12 0a1 1 0 0 1-.5-.11a1.4 1.4 0 0 1-.53-.25a2 2 0 0 1-.24-.29a.6.6 0 0 1-.11-.23a1 1 0 0 1 .55-1.05a1.33 1.33 0 0 1 1.48 0a.333.333 0 0 0 .46-.48a1.89 1.89 0 0 0-1.6-.58a1.54 1.54 0 0 0-.12-.82a.372.372 0 0 0-.7.25a1 1 0 0 1-.19.85a2.3 2.3 0 0 0-.529.39a1 1 0 0 1-.18.07a1.2 1.2 0 0 1-.5-.11a1.4 1.4 0 0 1-.46-.29a2.3 2.3 0 0 1-.25-.29a.56.56 0 0 1-.1-.24a.94.94 0 0 1 .57-1.049a1.35 1.35 0 0 1 1.48 0a.33.33 0 0 0 .44-.47a2.32 2.32 0 0 0-2.36-.44a1.83 1.83 0 0 0-1 .79a2 2 0 0 0-.359 1.39c.035.21.106.413.21.6q.214.333.5.61c.29.25.637.428 1.01.519q.229.07.47.08a2 2 0 0 0 0 .49a1.7 1.7 0 0 0 .22.59q.203.346.499.62a2.53 2.53 0 0 0 1.73.599a.2.2 0 0 1 0 .08c.033.212.108.416.22.6c.135.226.303.432.499.61c.286.251.629.43 1 .52a2.05 2.05 0 0 0 1.119 0a2.1 2.1 0 0 0 1.25-1.05a1.81 1.81 0 0 0-.01-1.53" />
        <path fill="#0C6FFF" d="M10.794 6.354q.205.04.4.11c.69.28 1.07-.45.57-.77a3 3 0 0 0-.8-.33a5.3 5.3 0 0 0-1.9-.06a7.3 7.3 0 0 1-1.669-.08l-2.049-.77q-.711-.298-1.47-.45a.31.31 0 0 0-.279.36a.32.32 0 0 0 .29.29s.12.06.23.12c.62.32 1.929 1.14 2.819 1.59c.365.209.77.338 1.19.38l1.129-.23a5.3 5.3 0 0 1 1.54-.16" />
        <path fill="#F96900" d="M23.909 3.875a.38.38 0 0 0-.52-.13l-1.78 1a6 6 0 0 1-.999.46a1.9 1.9 0 0 1-.63.09a8 8 0 0 1-1-.08a7 7 0 0 1-.869-.21c-.42-.14-.82-.32-1.24-.44a3.3 3.3 0 0 0-.999-.14q-.407.018-.79.16c-.353.117-.69.282-1 .49c-.25.15-2.548 2.278-2.768 2.508a6 6 0 0 0-1 1.23a2.5 2.5 0 0 0-.32 1.11a1.51 1.51 0 0 0 .46 1.239a2 2 0 0 0 1.69.38c.516-.104 1-.33 1.409-.66q.613-.488 1.14-1.07a5.2 5.2 0 0 0 1.599.39q.39.045.78 0q.386-.056.75-.2a4.5 4.5 0 0 0 1.469-1a.32.32 0 0 0 .08-.46a.33.33 0 0 0-.46-.08a5.4 5.4 0 0 1-1.44.39l-.87.15c-.2 0-.38.07-.579.08a6 6 0 0 1-.94 0a.2.2 0 0 0 0-.11a.32.32 0 0 0-.46 0q-.71.705-1.519 1.29a2.5 2.5 0 0 1-1.08.42a1.2 1.2 0 0 1-.78-.14a.5.5 0 0 1-.249-.54a1.7 1.7 0 0 1 .26-.64q.375-.524.86-.95c.49-.489 1-.999 1.519-1.488a8 8 0 0 1 1.05-.82q.29-.195.61-.34a1.87 1.87 0 0 1 1.249-.09c.41.09.8.24 1.21.36q.537.135 1.089.19q.54.03 1.08 0c.32-.01.637-.07.939-.18a7.3 7.3 0 0 0 1.14-.6l1.729-1.09a.37.37 0 0 0 .18-.48" />
        <path fill="#0C6FFF" d="M18.56 14a4 4 0 0 0-.22-.51a7.7 7.7 0 0 0-.999-1.349l-1.07-1.22a.33.33 0 0 0-.529.39l.79 1.42q.39.624.68 1.3c.121.252.202.522.24.8a1.25 1.25 0 0 1-.25.999c-.14.16-.32.28-.52.35a1 1 0 0 0-.05-.11a8 8 0 0 0-.7-.89l-1.44-1.63a.374.374 0 0 0-.62.42l1.12 1.91q.285.4.53.83q.13.221.2.47a.58.58 0 0 1-.14.69a1 1 0 0 1-.5.219v-.09a3.4 3.4 0 0 0-.39-.64c-.24-.29-.47-.57-.73-.84s-.5-.53-.769-.779a.33.33 0 0 0-.46-.05a.34.34 0 0 0-.05.47c.16.24.3.47.44.72s.39.73.57 1.11l.28.679l-.14.24a.93.93 0 0 1-.61.42a1 1 0 0 1-.72-.08a.37.37 0 0 0-.51.12a.38.38 0 0 0 .12.52a1.72 1.72 0 0 0 1.16.42a2 2 0 0 0 1.85-1.12q.045-.148.06-.3a2 2 0 0 0 .999-.19a1.63 1.63 0 0 0 .81-1.7a2.14 2.14 0 0 0 1-.48a2.3 2.3 0 0 0 .749-1.629a3.7 3.7 0 0 0-.18-.89" />
        <path fill="#F96900" d="M23.989 12.771a.37.37 0 0 0-.45-.27c-.61.07-1.2.09-1.79.19a7 7 0 0 0-1.179.3a6 6 0 0 0-1.25.65c-.82.34-.33 1 .44.78l.93-.19l.7-.17l.69-.22c.55-.19 1.089-.4 1.639-.62a.37.37 0 0 0 .27-.45" />
      </g>
    </svg>
  )
}

function LocationIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <circle cx="12" cy="9" r="2.5" fill="#0C6FFF" fillOpacity="0">
        <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;1" />
      </circle>
      <path fill="none" stroke="#0C6FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z">
        <animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z" />
        <animateTransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5" />
      </path>
    </svg>
  )
}