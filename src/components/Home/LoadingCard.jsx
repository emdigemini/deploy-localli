export function LoadingMainFeed(){
  return (
    <div className="main-feed">
      <LoadingPostBox />
      <LoadingPostCard />
    </div>
  )
}

export function LoadingPostCard({ cards=5 }){
  return (
    Array(cards).fill(0).map((_, i) => {
      return (
      <div key={0-i} className="post-card">
        <div className="post-header">
          <div className="user-profile skeleton">

          </div>
          <div className="profile-info">
            <div className="username skeleton skeleton-text">
              <div className="skeleton skeleton-text"
              style={{
                width: '250px'
              }}></div>
            </div>
            <div className="role skeleton skeleton-text"></div>
          </div>
        </div>
        <div className="post-text">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
        <div className="post-card_img">
          <div className="skeleton" style={{
            width: '585px',
            height: '395px'
          }}></div>
        </div>
        <div className="post-card_interaction">
          <div className="interaction-card skeleton"></div>
          <div className="interaction-card skeleton"></div>
          <div className="interaction-card skeleton"></div>
          <div className="interaction-card skeleton"></div>
        </div>
      </div>
      )
    })
  )
}

export function LoadingPostBox(){
  return (
    <div className="post-box">
      <div className="user-profile skeleton"></div>
      <button className="skeleton"></button>
      <div className="upload-img skeleton"></div>
    </div>
  )
}

export function LoadingSideCards(){
  return (
    <>
    <div className="left-sticky-wrapper">
      <div className="left-side-cards">
        <div className="profile-card">
          <div className="profile-pic skeleton">

          </div>
          <div className="profile-card-loading skeleton skeleton-text">
          </div>
          <div className="profile-card-loading skeleton skeleton-text">
          </div>
          <div className="profile-info-loading skeleton">
          </div>
          <div className="profile-info-loading skeleton">
          </div>
          <div className="profile_job-details">
            <p className="profile-pill skeleton"></p>
            <p className="profile-pill skeleton"></p>
            <p className="profile-pill skeleton"></p>
            <p className="profile-pill skeleton"></p>
            <p className="profile-pill skeleton"></p>
            <p className="profile-pill skeleton"></p>
          </div>
        </div>
        <div className="side-footer">
          <div className="adsense skeleton">
          </div>
          <div className="utility-links">
            <a className="skeleton-link skeleton" href=""></a>
            <a className="skeleton-link skeleton" href=""></a>
            <a className="skeleton-link skeleton" href=""></a>
            <a className="skeleton-link skeleton" href=""></a>
            <a className="skeleton-link skeleton" href=""></a>
            <a className="skeleton-link skeleton" href=""></a>
          </div>
          <div className="copyright">
            <p>Kapit</p><p>Bahay</p>
            <p>Corporation © 2025</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export function LoadingAsideSection(){
  return (
    <div className="sidebar">
      <section className="suggestions">
        <div className="skeleton skeleton-text" 
        style={{width: '300px', height: '20px'}}></div>
        <ul children="suggested-users">
          <li>
            <span className="small-profile skeleton"></span>
            <div className="skeleton skeleton-text" 
        style={{width: '175px', height: '20px'}}></div>
          </li>
          <li>
            <span className="small-profile skeleton"></span>
            <div className="skeleton skeleton-text" 
        style={{width: '175px', height: '20px'}}></div>
          </li>
          <li>
            <span className="small-profile skeleton"></span>
            <div className="skeleton skeleton-text" 
        style={{width: '175px', height: '20px'}}></div>
          </li>
          <li>
            <span className="small-profile skeleton"></span>
            <div className="skeleton skeleton-text" 
        style={{width: '175px', height: '20px'}}></div>
          </li>
        </ul>
        <div className="show-more-users">
          <div className="skeleton skeleton-text" 
        style={{width: '120px', height: '15px'}}></div>
        </div>
      </section>
      <section className="tutor-preferences">
      <div className="skeleton skeleton-text" 
      style={{width: '300px', height: '20px'}}></div>
      <div className="your-preferences">
        <div className="input-group-1">
          <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>
          <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>
          <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>
        </div>

        <div className="input-group-2">
          <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>

          <div className="input-box">
            <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>
            <div className="radio-group">
              <div className="skeleton skeleton-text" 
        style={{width: '75px', height: '15px'}}></div>
              <div className="skeleton skeleton-text" 
        style={{width: '75px', height: '15px'}}></div>
              <div className="skeleton skeleton-text" 
        style={{width: '75px', height: '15px'}}></div>
            </div>
            <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>

            <div className="skeleton skeleton-text" 
        style={{width: '200px', height: '30px'}}></div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}