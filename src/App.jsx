import 'bootstrap-icons/font/bootstrap-icons.css'
import "aos/dist/aos.css"
import AOS from 'aos'
import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { LoginPage } from "./pages/LoginSignup/LoginPage"
import { HomePage } from './pages/Home/HomePage'
import { CommunityPage } from './pages/Community/CommunityPage'
import { MessagePage } from './pages/Message/MessagePage'
import { ProfilePage } from './pages/Profile/ProfilePage'
import { LoadingProvider } from './context/LoadingContext'
import { CreatePostProvider, PostProvider, PrevMediaProvider } from './context/PostContext'
import { ScrollManager } from './utils/ScrollManager'
import { CheckLogin } from './context/LoginContext'

function App() {
  const { isLogin } = useContext(CheckLogin);

  useEffect(() => {
      AOS.init({
        duration: 900,
        once: true
      })  

    }, [])
  return (
    <>
      <ScrollManager /> 
      <LoadingProvider>
        <CreatePostProvider>
          <PostProvider>
            <PrevMediaProvider>
              <Routes>
                {!isLogin 
                ? <Route path='/' element={<LoginPage />} />
                : <Route path='/*' element={<Header />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='community' element={<CommunityPage />} />
                    <Route path="messages" element={<MessagePage />} />
                    <Route path="profile" element={<ProfilePage />} />
                  </Route>
                }
              </Routes>
            </PrevMediaProvider>
          </PostProvider>
        </CreatePostProvider>
      </LoadingProvider>
    </>
  )
}

export default App
