import { useEffect, useRef } from "react"

export function NotificationList({ notifRef, setToggleNotif }){
  const notifBar = useRef(null);

  useEffect(() => {
    const offToggle = (e) => {
      if(notifBar.current 
        && !notifBar.current.contains(e.target) 
        && !notifRef.current.contains(e.target)
      ) {
        setToggleNotif(false);
      }
    }

    document.body.addEventListener('click', offToggle);
    return () => document.body.removeEventListener('click', offToggle);
  }, [])

  return (
    <div ref={notifBar} className="notification-screen">
      
      <div className="header-container">
          <button className="tab-btn tab-active">All</button>
          <button className="tab-btn tab-inactive">Unread</button>
          <button className="tab-btn tab-inactive">Request</button>
          <div className="menu-circle">•••</div>
      </div>

      <div className="notification-list">

        <div className="notification-row row-read">
            <div className="status-col">
                </div>
            <div className="avatar-col">
                <div className="avatar-img"></div>
                <span className="avatar-role">Student</span>
            </div>
            <div className="content-col">
                <div className="user-name">Jacob D. Magiba</div>
                <div className="message-preview">
                    <strong>Sent you a request:</strong> "Want to be your student."
                </div>
                <div className="user-location">• 4 km away</div>
            </div>
            <div className="action-col">
                <span className="time-stamp">40m</span>
                <span className="more-dots">•••</span>
            </div>
        </div>

        <div className="notification-row row-unread">
            <div className="status-col">
                <div className="blue-dot"></div> </div>
            <div className="avatar-col">
                <div className="avatar-img"></div>
                <span className="avatar-role">Student</span>
            </div>
            <div className="content-col">
                <div className="user-name">Jason NA. Nagiba</div>
                <div className="message-preview">
                    <strong>You were mentioned in a comment:</strong> 'I recommend this man, best tutor in Pililla Rizal'
                </div>
                <div className="user-location">• 1 km away</div>
            </div>
            <div className="action-col">
                <span className="time-stamp">1h</span>
                <span className="more-dots">•••</span>
            </div>
        </div>

        <div className="notification-row row-unread">
            <div className="status-col">
                <div className="blue-dot"></div> </div>
            <div className="avatar-col">
                <div className="avatar-img"></div>
                <span className="avatar-role">Student</span>
            </div>
            <div className="content-col">
                <div className="user-name">Jonathan D. Magigiba</div>
                <div className="message-preview">
                    <strong>Sent you a request:</strong> "Want to be your student."
                </div>
                <div className="user-location">• 9 km away</div>
            </div>
            <div className="action-col">
                <span className="time-stamp">3h</span>
                <span className="more-dots">•••</span>
            </div>
        </div>

      </div>

      <div className="footer-message">
          No notifications yet. New updates will appear here.
      </div>

    </div>
  )
}