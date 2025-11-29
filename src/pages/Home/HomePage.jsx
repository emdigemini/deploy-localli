import { SideCards } from '../../components/Header/SideCards'
import { PostFeed } from '../../components/Home/PostFeed'
import { AsideSection } from '../../components/Home/AsideSection'
import { useContext, useEffect } from 'react'
import { LoadingSideCards, LoadingMainFeed, LoadingAsideSection } from '../../components/Home/LoadingCard'
import { LoadingData } from '../../context/LoadingContext'

export function HomePage(){
  const { isLoaded, setIsLoaded } = useContext(LoadingData);

  useEffect(() => {
    if(isLoaded) return;
    const loadItems = setTimeout(() => setIsLoaded(true), 700);
    return () => clearTimeout(loadItems);
  }, [])

  return (
    <>
      <div className="fyp-page">
        <div className="left-side">
          {!isLoaded ? <LoadingSideCards /> : <SideCards />} 
          {!isLoaded ? <LoadingMainFeed /> : <PostFeed />} 
        </div>
        {!isLoaded ? <LoadingAsideSection /> : <AsideSection />} 
      </div>
    </>
  )
}

