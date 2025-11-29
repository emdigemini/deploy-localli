import { createContext, useState } from "react";

export const CreatePost = createContext();

export function CreatePostProvider({ children }){
  const [ createPost, setCreatePost ] = useState(false);

  const toggleCreatePost = (value) => {
    setCreatePost(value);
  };

  return (
    <CreatePost.Provider value={{ createPost, toggleCreatePost }}>
      {children}
    </CreatePost.Provider>
  )
}

export const PostRender = createContext();

export function PostProvider({ children }){
  const [ posts, setPost ] = useState([]);

  const addPost = (value) => {
    setPost(prev => {
      return [...prev, value].sort((a, b) => b.timestamp - a.timestamp)
    });
  }

  return (
    <PostRender.Provider value={{ posts, addPost, setPost }}>
      {children}
    </PostRender.Provider>
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
