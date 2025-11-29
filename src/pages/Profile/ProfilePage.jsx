import { PostCard } from "../../components/Home/PostFeed"

export function ProfilePage(){
  return (
    <div className="profile-page">
      <div className="graphic-background">
        <img draggable="false" className="lalake" src="/image/lalake.png" alt="graphic-background" />
        <img draggable="false" className="babae" src="/image/babae.png" alt="graphic-background" />

        <div className="modal-card">
          <div className="modal-card-profile">
            <div className="cover-photo">
              <div className="profile-photo"></div>
            </div>
            <div className="badge">
              <TutorBadge />
              <VerifiedBadge />
            </div>
            <div className="profile-user-info">
              <h2>User Name</h2>
              <p className="job">
                <Job />
                Data engineer at Socia PH
              </p>
              <p className="school">
                <Toga />
                Graduate at UP Diliman
              </p>
              <p className="location">
                <i className="bi bi-geo-alt"></i>
                Pililla, Calabarzon
              </p>
            </div>
          </div>

          <div className="modal-card-skills">

          </div>

          <div className="modal-card-posts">
            <div className="buttons">
              <button className="active">Posts</button>
              <button>Saved</button>
              <button>Images</button>
              <button>Videos</button>
            </div>
            <div className="posts">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
      <div className="plane-background">
        <img draggable="false" className="plane-left" src="/image/plane-left.png" alt="plane-background" />
        <img draggable="false" className="plane-right" src="/image/plane-right.png" alt="plane-background" />
      </div>
    </div>
  )
}


function Toga(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#262626" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z" strokeWidth="0.5" stroke="none" />
    </svg>
  )
}

function Job(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
    <path fill="none" stroke="#000000ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M30 8H2v18h28ZM20 8s0-4-4-4s-4 4-4 4M8 26V8m16 18V8" />
  </svg>
  )
}

function VerifiedBadge(){
  return (
    <div className="verified">
      <p>Verified</p>
      <i className="bi bi-check-circle-fill"></i>
    </div>
  )
}

function TutorBadge(){
  return (
    <div className="tutor-badge">
      <Star />
      <p>Top Tutor Badge</p>
    </div>
  )
}

function Star(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -0.5 41 41">
      <g fill="none" strokeMiterlimit="10">
        <path fill="#ffe236" stroke="#231f20" d="M38.24 13.84a25.6 25.6 0 0 0-6.13-2a33 33 0 0 0-4.83-.59a29.4 29.4 0 0 0-2-4.11a25.8 25.8 0 0 0-3.75-5.24a2.47 2.47 0 0 0-3.38 0a26.2 26.2 0 0 0-3.75 5.28a35 35 0 0 0-1.94 4.13a29 29 0 0 0-4.56.61a26.2 26.2 0 0 0-6.14 1.95a2.49 2.49 0 0 0-1 3.22a26 26 0 0 0 3.81 5.19a36 36 0 0 0 3.38 3.17A29.3 29.3 0 0 0 7 30.3a26 26 0 0 0 0 6.43a2.48 2.48 0 0 0 2.74 2a26 26 0 0 0 6.11-2a37 37 0 0 0 4-2.22a35 35 0 0 0 4 2.22a26 26 0 0 0 6.11 2a2.48 2.48 0 0 0 2.74-2a26 26 0 0 0 0-6.43a30 30 0 0 0-.86-4.65a28 28 0 0 0 3.63-3.41a26.6 26.6 0 0 0 3.82-5.19a2.47 2.47 0 0 0-1.05-3.21Z" strokeWidth="1" />
        <path stroke="#0C6FFF" strokeLinecap="round" d="M21.52 5.84A26 26 0 0 1 24 10.11" strokeWidth="1" />
      </g>
    </svg>
  )
}