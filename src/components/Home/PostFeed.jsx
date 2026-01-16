import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { CreatePost, SelectedMedia } from "../../context/PostContext";
import { LoadingData } from "../../context/LoadingContext";

import DOMPurify from "dompurify";
import parser from "html-react-parser";

export function PostFeed(){
  const { isLoading } = useContext(LoadingData);

  return (
    <>
      <div className="main-feed">
        <PostBox />
        <PostCard />
      </div>
    </>
  )
}

export function CreatePostUtility(){
  const { prevMedia, setPrevMedia } = useContext(SelectedMedia);
  const { toggleCreatePost, addPost } = useContext(CreatePost);

  const [ postText, setPostText ] = useState("");
  const [ mediaPreview, setMediaPreview ] = useState([]);

  const createPostRef = useRef(null);
  const writePostRef = useRef(null);

  // ----------------------------
  // Generate preview URLs for images & videos
  // ----------------------------
  useEffect(() => {
    const mediaUrl = prevMedia.map(file => ({ url: URL.createObjectURL(file.media), type: file.media.type }));

    setMediaPreview(mediaUrl);
    return () => {
      mediaUrl.forEach(u => URL.revokeObjectURL(u.url));
    };
  }, [prevMedia])

  // ----------------------------
  // Remove media from selected list
  // ----------------------------
  const removeMedia = (i) => {
    const newMedia = prevMedia.filter((_, id) => id !== i);
    setPrevMedia(newMedia);
  }

  // ----------------------------
  // Close post box if clicked outside
  // ----------------------------
  const postBoxHandler = (e) => {
    if(!createPostRef.current.contains(e.target)){
      toggleCreatePost(false);
    } else return;
  }

  // ----------------------------
  // Update post text from contentEditable
  // ----------------------------
  const inputPostText = (e) => {
    const text = e.target.innerHTML
    .replaceAll('<div>', '<br>')
    .replaceAll('</div>', '');
    setPostText(text);
  }

  // ----------------------------
  // Upload post
  // ----------------------------
  const uploadPost = () => {
    if(writePostRef.current.textContent.length > 0 || prevMedia.length > 0){
      const timestamp = Date.now();
      const id = crypto.randomUUID();
      const value = { id, text: postText, file: [...prevMedia], timestamp }
      addPost(value);
      setPostText("");
      setPrevMedia([]);
      toggleCreatePost(false);
    } else return;
  }

  // ----------------------------
  // Render
  // ----------------------------
  return (
    <div onClick={postBoxHandler} className="create-post-box">
      <div ref={createPostRef} className="create-post">
        <div className="header">
          <i onClick={() => toggleCreatePost(false)}
           className="bi bi-x"></i>
          <div className="profile"></div>
          <div className="profile-button">
            <p>User Name</p>
            <button>Post to Anyone</button>
          </div>
        </div>

        <div contentEditable 
          ref={writePostRef}
          onInput={inputPostText}
          aria-multiline="true"
          role="textbox" 
          className={`post-text-box 
          ${writePostRef?.current?.textContent.length > 0 
          ? "" : "inactive"}`}
        >
        </div>

        <div className="prev-media">
          {mediaPreview.map((u, i) => {
            return (
                <div key={i} className="media-prev">
                  <i onClick={() => removeMedia(i)}
                    className="bi bi-x"></i>
                    {
                      u.type.startsWith("image/") 
                      ? <img src={u.url} alt="prev media" />
                      : <video src={u.url} controls />
                    }
                </div>
              
            )
          })}
        </div>

        <div className="post-tools">
          <AddMedia />
          <TagUser />
        </div>

        <button onClick={uploadPost}
         className="post-button"
        >POST</button>
      </div>
    </div>
  )
}

export function PostCard(){
  const { posts } = useContext(CreatePost);
  const [ onComment, setOnComment ] = useState([]);
  const [ renderMedia, setRenderMedia ] = useState([]);

  useEffect(() => {
    const mediaUrls = posts.flatMap(post => {
      if(!post.file) return [];
      return post.file
        .map(p => ({ postId: post.id, id: p.id, url: URL.createObjectURL(p.media), type: p.media.type }))
    });

    setRenderMedia(mediaUrls);

    return () => {
      mediaUrls.forEach(file => URL.revokeObjectURL(file.url));
    }

  }, [posts])


  return (
    <>
      {posts.map(p => {
        const text = DOMPurify.sanitize(p.text);
        const urlMedia = renderMedia.filter(u => u.postId === p.id);

        return (
          <div key={p.id} className="post-card">
            <div className="post-header">
              <div className="user-profile">

              </div>
              <div className="profile-info">  
                <div className="username">User Name</div>
                <div className="role">Tutor / Web Development</div>
              </div>
            </div>
            <div className="post-text">
              {parser(text)}
            </div>
            <div className="post-card_img">
                <MediaSlider post={p} media={urlMedia} />
            </div>
            <div className="post-card_interaction">
              <LikeButton postId={p.id} />
              <CommentButton 
                postId={p.id}
                onComment={onComment}
                setOnComment={setOnComment}
              />
              <BookmarkButton postId={p.id} />
              <ShareButton />
            </div>
            {onComment.includes(p.id) && 
              <CommentSection postId={p.id} onComment={onComment} />
            }
          </div>
        )
      })}
      <div key={0} className="post-card">
        <div className="post-header">
          <div className="user-profile">

          </div>
          <div className="profile-info">
            <div className="username">KAPIT BAHAY</div>
            <div className="role">Developer / Admin</div>
          </div>
        </div>
        <div className="post-text">
        Hey there! <br />
        Want to level up your learning? <br />
        Whether it's Math, Science, English, History, IT, Accounting, or Economics, you're in the right place. <br />
        Connect with your selected tutor, chat and collaborate, or be friends with fellow learners. Explore resources and get step-by-step guidance to make learning easier and more fun!
        </div>
        <img src="image/kapitbahay.png" alt="post img" />
        <div className="post-card_interaction">
          <LikeButton />
          <CommentButton 
            postId={0}
            onComment={onComment}
            setOnComment={setOnComment}
          />
          <BookmarkButton />
          <ShareButton />
        </div>
        {onComment.includes(0) && 
          <CommentSection postId={0} onComment={onComment} />
        }
      </div>
        <div key={1} className="post-card">
        <div className="post-header">
          <div className="user-profile">

          </div>
          <div className="profile-info">
            <div className="username">User Name</div>
            <div className="role">Student / Senior High School - G11</div>
          </div>
        </div>
        <div className="post-text">
          Hi! I'm looking for a tutor to help me learn the MERN Stack. I want someone patient who can guide me step by step through building full-stack applications, understanding React, Node.js, Express, and MongoDB. Prefer online or nearby sessions. Thanks!
        </div>
        <div className="post-card_img">
          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post img" />
        </div>
        <div className="post-card_interaction">
          <LikeButton />
          <CommentButton 
            postId={1}
            onComment={onComment}
            setOnComment={setOnComment}
          />
          <BookmarkButton />
          <ShareButton />
        </div>
        {onComment.includes(1) && 
          <CommentSection postId={1} onComment={onComment} />
        }
      </div>
      <div key={2} className="post-card">
        <div className="post-header">
          <div className="user-profile">

          </div>
          <div className="profile-info">
            <div className="username">User Name</div>
            <div className="role">Student / Senior High School - G11</div>
          </div>
        </div>
        <div className="post-text">
          Hi! I'm struggling with algebra, especially solving quadratic equations. I get lost in factoring and need someone patient to explain step by step. Prefer online or nearby sessions. Thanks!
        </div>
        <div className="post-card_img">
          <img src="https://images.unsplash.com/photo-1739858446889-b20d63614d73?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post img" />
        </div>
        <div className="post-card_interaction">
          <LikeButton />
          <CommentButton 
            postId={2}
            onComment={onComment}
            setOnComment={setOnComment}
          />
          <BookmarkButton />
          <ShareButton />
        </div>
        {onComment.includes(2) && 
          <CommentSection postId={2} onComment={onComment} />
        }
      </div>
      <div key={3} className="post-card">
        <div className="post-header">
          <div className="user-profile">

          </div>
          <div className="profile-info">
            <div className="username">User Name</div>
            <div className="role">Student / Senior High School - G11</div>
          </div>
        </div>
        <div className="post-text">
          Hi! I'm a BSBA student looking for a tutor to help me understand my college subjects better. I often get lost with topics like Accounting, Finance, Economics, or Marketing, and I need someone patient to guide me step by step. Prefer online or nearby sessions. Thanks!
        </div>
        <div className="post-card_img">
          <img src="https://images.unsplash.com/photo-1753955900083-b62ee8d97805?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post img" />
        </div>
        <div className="post-card_interaction">
          <LikeButton />
          <CommentButton 
            postId={3}
            onComment={onComment}
            setOnComment={setOnComment}
          />
          <BookmarkButton />
          <ShareButton />
        </div>
        {onComment.includes(3) && 
          <CommentSection postId={3} onComment={onComment} />
        }
      </div>
    </>
  )
}

function MediaSlider({ post, media }){
  const [ activeIndex, setActiveIndex ] = useState(0);

  const next = useCallback(() =>{
    setActiveIndex(i => {
      if(i === media.length - 1) return i;
      return i + 1;
    })
  }, [media]);

  const prev = useCallback(() => {
    setActiveIndex(i => {
      if(i === 0) return i;
      return i - 1;
    })
  }, []);

  if (!media || media.length === 0) return null;

  return (
    <> 
      {media[activeIndex].type.startsWith("image/")
        ? <img src={media[activeIndex].url} alt="post img" />
        : <video src={media[activeIndex].url} controls autoPlay />
      }
      
      {post?.file.length > 1 && (
        <>
          <div className="img-count">{activeIndex+1} / {media.length}</div>
          <div onClick={next} className="slide-right">
            <i className="bi bi-chevron-right"></i>
          </div>
          <div onClick={prev} className="slide-left">
            <i className="bi bi-chevron-left"></i>
          </div>
        </>
      )}
    </>
  )
}

function PostBox(){
  const { toggleCreatePost } = useContext(CreatePost);

  return (
    <>
      <div className="post-box">
        <div className="user-profile"></div>
        <button onClick={() => toggleCreatePost(true)}>Post something...</button>
        <UploadImg />
      </div>
    </>
  )
}


/** ICONS */
function UploadImg(){
  const { toggleCreatePost } = useContext(CreatePost);
  const { setPrevMedia } = useContext(SelectedMedia);
  const selectMedia = useRef(null);
  
  function handleMedia(e){
    const selectedFiles = [...e.target.files];
    const files = selectedFiles.map(file => {
      return {
        media: file,
        id: crypto.randomUUID()
      }
    })
    setPrevMedia(prev => [...prev, ...files]);
    e.target.value = '';
    if(files.length > 0){
      toggleCreatePost(true);
    }
  }

  const uploadMedia = () => {
    selectMedia.current.click();
  }
  
  return (
    <div onClick={uploadMedia} className="upload-img">
      <input onChange={handleMedia}
        ref={selectMedia}
        type="file"
        accept="image/*, video/*"
        multiple
        style={{
          display: "none"
        }}
       />
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
        <path fill="currentColor" fillRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clipRule="evenodd" />
      </svg>
    </div>
  )
}

function AddMedia(){
  const { setPrevMedia } = useContext(SelectedMedia);
  const selectMedia = useRef(null);

  function handleMedia(e){
    const selectedFiles = [...e.target.files];
    const files = selectedFiles.map(file => {
      return {
        media: file,
        id: crypto.randomUUID()
      }
    })
    setPrevMedia(prev => [...prev, ...files]);
    e.target.value = '';
  }

  return (
    <>
    <input onChange={handleMedia}
      ref={selectMedia}
      type="file"
      accept="image/*, video/*"
      multiple
      style={{
        display: "none"
      }}
      />
    <svg onClick={() => selectMedia.current.click()} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
      <path fill="#666" d="M18.512 10.077c0 .739-.625 1.338-1.396 1.338s-1.395-.6-1.395-1.338s.625-1.337 1.395-1.337s1.396.598 1.396 1.337" strokeWidth="0.5" stroke="#666" />
      <path fill="#666" fillRule="evenodd" d="M18.036 5.532c-1.06-.136-2.414-.136-4.123-.136h-3.826c-1.71 0-3.064 0-4.123.136c-1.09.141-1.974.437-2.67 1.104c-.696.668-1.005 1.514-1.152 2.56C2 10.21 2 11.508 2 13.147v.1c0 1.639 0 2.937.142 3.953c.147 1.045.456 1.891 1.152 2.558c.696.668 1.58.964 2.67 1.104C7.024 21 8.378 21 10.087 21h3.826c1.71 0 3.064 0 4.123-.137c1.09-.14 1.974-.436 2.67-1.104c.696-.667 1.005-1.513 1.152-2.558c.142-1.016.142-2.314.142-3.953v-.1c0-1.64 0-2.937-.142-3.953c-.147-1.045-.456-1.891-1.152-2.559c-.696-.667-1.58-.963-2.67-1.104M6.15 6.858c-.936.12-1.475.347-1.87.724c-.393.378-.629.894-.755 1.791c-.1.72-.123 1.62-.128 2.796l.47-.395c1.125-.943 2.819-.889 3.875.123l3.99 3.825a1.2 1.2 0 0 0 1.491.124l.278-.187a3.606 3.606 0 0 1 4.34.25l2.407 2.078c.098-.264.173-.58.227-.965c.128-.916.13-2.124.13-3.824s-.002-2.908-.13-3.825c-.126-.897-.362-1.413-.756-1.79c-.393-.378-.933-.604-1.869-.725c-.956-.123-2.216-.125-3.99-.125h-3.72c-1.774 0-3.034.002-3.99.125" clipRule="evenodd" strokeWidth="0.5" stroke="#666" />
      <path fill="#666" d="M17.086 2.61c-.86-.11-1.954-.11-3.319-.11h-3.09c-1.364 0-2.459 0-3.319.11c-.89.115-1.632.358-2.221.92a2.9 2.9 0 0 0-.724 1.12c.504-.23 1.074-.366 1.714-.45c1.084-.14 2.47-.14 4.22-.14h3.914c1.75 0 3.135 0 4.22.14c.558.073 1.064.186 1.519.366a2.9 2.9 0 0 0-.692-1.035c-.589-.563-1.331-.806-2.222-.92" strokeWidth="0.5" stroke="#666" />
    </svg>
    </>
  )
}

function TagUser(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
      <g fill="none" stroke="#666" strokeLinecap="round" strokeWidth="1.5">
        <path d="M12 18a6 6 0 1 1 5.64-3.946a1.54 1.54 0 0 1-.413.599l-.08.074a1.636 1.636 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0a2.4 2.4 0 0 1 4.8 0Z" />
        <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" />
      </g>
    </svg>
  )
}

/** INTERACTIONS */
function LikeButton({ postId }){
  const { posts, setPost } = useContext(CreatePost);
  const [ like, setLike ] = useState(false);

  const likePost = () => {
    const addLike = !like; 
    setLike(addLike);
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, like: addLike }; 
      } return post;
    });
    setPost(updatedPosts);
  };

  return (
    <button onClick={likePost}>
      <i className={`bi bi-heart${like ? '-fill liked' : ''}`}></i>
    </button>
  )
}

function CommentButton({ postId, onComment, setOnComment }){
  const toggleComment = () => {
    if(onComment.includes(postId)){
      setOnComment(prev => prev.filter(id => id !== postId));
    } else {
      setOnComment(prev => [...prev, postId]);
    }
  }

  return (
    <button onClick={toggleComment}>
      <i className={`bi bi-chat${onComment?.includes(postId) ? '-fill active' : ''}`}></i>
    </button>
  )
}

function CommentSection({ postId, onComment }){
  const [ commentText, setCommentText ] = useState("");  
  const commentRef = useRef(null);

  useEffect(() => {
    onComment.includes(postId) && commentRef.current.focus();
  }, [])

  const writeComment = (e) => {
    const text = e.target.textContent;
    setCommentText(text);
  };

  return (
    <>
      <div className="comment-section">
        <div className={`comment-box ${commentRef?.current?.textContent.length > 0 
            ? "active" : ""}`}>
          <div className="profile"></div>
          <div className="input-box">
            <p className='comment-input' 
              contentEditable="true"
              aria-multiline="true"
              role="textbox"
              onInput={writeComment}
              ref={commentRef}
            >

            </p>
            <i className="bi bi-send-arrow-down"></i>
          </div>
        </div>
        <p className="no-comments">No comments yet. <br /> Be the first to share your insights.</p>
      </div>
    </>
  )
}

function ShareButton(){
  return (
    <button>
      <i className="bi bi-share"></i>
    </button>
  )
}

function BookmarkButton({ postId }){
  const { posts, setPost } = useContext(CreatePost);
  const [ bookmark, setSave ] = useState(false);

  const savePost = () => {
    const addToSave = !bookmark;
    setSave(addToSave);
    const updatedPosts = posts.map(post => {
      if(post.id === postId){
        return {...post, save: addToSave};
      } return posts;
    });
    setPost(updatedPosts);
  }

  return (
    <button onClick={savePost}>
      <i className={`bi bi-bookmark${bookmark ? '-fill saved' : ''}`}></i>
    </button>
  )
}