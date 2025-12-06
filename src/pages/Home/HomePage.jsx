import { SideCards } from '../../components/Header/SideCards'
import { PostFeed } from '../../components/Home/PostFeed'
import { AsideSection } from '../../components/Home/AsideSection'
import { useContext, useEffect } from 'react'
import { LoadingHomeScreen } from '../../components/Home/LoadingCard'
import { LoadingData } from '../../context/LoadingContext'

export function HomePage(){
  const { isLoading, setIsLoading } = useContext(LoadingData);

  useEffect(() => {
    if(isLoading) return;
    const loadItems = setTimeout(() => setIsLoading(true), 700);
    return () => clearTimeout(loadItems);
  }, [isLoading]        );


  return (
    <>
      {
      !isLoading 
      ? <LoadingHomeScreen />
      : <div className="fyp-page">
          <div className="left-side">
            <SideCards /> 
            <PostFeed /> 
          </div>
          <AsideSection /> 
        </div> 
      }
    </>
  )
}

