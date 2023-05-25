import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await getDocs(collection(firestore, 'posts'));
      // debugger;
      // console.log('postcollection:', postsCollection);
      const tempPosts = [];
      postsCollection.forEach(doc => {
        tempPosts.push({
          id: doc.id,
          ...doc.data()
        })
      });
      // console.log(tempPosts);
      setPosts(tempPosts.sort((a,b) => a.createdAt.seconds - b.createdAt.seconds));
    }
    fetchPosts();
  },[])
    
  return (
    <div className='home'>
      <h1>Tech Posts</h1>
      <div id='blog-by'>
        Mayank
      </div>
      {
        posts.map((post, index) => (
          <div className='post' key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            <p>{post.keyword}</p>

            <p>{post.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home