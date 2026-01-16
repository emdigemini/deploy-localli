import { createContext, useState } from "react";

export const CreatePost = createContext();

export function PostProvider({ children }){
  const [ createPost, setCreatePost ] = useState(false);
  const [ posts, setPost ] = useState([]);

  const toggleCreatePost = (value) => {
    setCreatePost(value);
  };

  const addPost = (value) => {
    setPost(prev => {
      return [...prev, value].sort((a, b) => b.timestamp - a.timestamp)
    });
  }

  return (
    <CreatePost.Provider value={{ createPost, toggleCreatePost, posts, addPost, setPost }}>
      {children}
    </CreatePost.Provider>
  )
} 

export const SelectedMedia = createContext();

export function PrevMediaProvider({ children }){
  const [ prevMedia, setPrevMedia ] = useState([]);

  return (
    <SelectedMedia.Provider value={{prevMedia, setPrevMedia}}>
      {children}
    </SelectedMedia.Provider>
  )
}
