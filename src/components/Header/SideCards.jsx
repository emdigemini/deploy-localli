import { ProfileCard } from "./ProfileCard"
import { LoadingData } from "../../context/LoadingContext"
import { useContext } from "react"

export function SideCards(){
  const { isLoading } = useContext(LoadingData);

  return (
    <div className="left-sticky-wrapper">
      <div className="left-side-cards">
          <ProfileCard />
          <SideFooter />
      </div>
    </div>
  )
}

function SideFooter(){
  return (
    <div className="side-footer">
      <div className="adsense">
        Ads
      </div>
      <div className="utility-links">
        <a href="">About</a>
        <span>•</span>
        <a href="">Accessibility</a>
        <span>•</span>
        <a href="">Help Center</a>
        <span>•</span>
        <a href="">Privacy & Terms</a>
        <span>•</span>
        <a href="">Advertising</a>
        <span>•</span>
        <a href="">Ad Choices</a>
      </div>
      <div className="copyright">
        <p>Kapit</p><p>Bahay</p>
        <p>Corporation © 2025</p>
      </div>
    </div>
  )
}