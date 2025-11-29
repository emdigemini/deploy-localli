import { useNavigate } from "react-router"

export function ProfileCard(){
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/profile')} className="profile-card">
      <div className="profile-pic">

      </div>
      <div className="profile_user-name">
        User Name
      </div>
      <div className="profile_job-title">
        Data engineer at Socia PH
      </div>
      <div className="profile_location">
        <i className="bi bi-geo-alt"></i>
        <p>Pililla, Calabarzon</p>
      </div>
      <div className="profile_availability">
        <i className="bi bi-clock"></i>
        <p>Availability: 6AM - 12NN</p>
      </div>
      <div className="profile_job-details">
        <p>Data Engineer</p>
        <p>Online</p>
        <p>Tutor</p>
        <p>Part-time</p>
      </div>
    </div>
  )
}