import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubTitle = styled.p`
  font-size: 13px;
`;

const Post = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    color: #2196f3;
    border: 1px solid #115511
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 800px) {
    border: 1px solid black;
  }
`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await getDocs(collection(firestore, "posts"));
      // debugger;
      // console.log('postcollection:', postsCollection);
      const tempPosts = [];
      postsCollection.forEach((doc) => {
        tempPosts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log(tempPosts);
      setPosts(tempPosts.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds));
    };
    fetchPosts();
  }, []);

  return (
    <div className='home'>
      <BlogHeading>Tech Posts</BlogHeading>
      <div id='blog-by'>Mayank</div>
      {posts.map((post, index) => (
        <Post className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <PostSubTitle>{post.keyword}</PostSubTitle>

          <PostSubTitle>{post.content}</PostSubTitle>
        </Post>
      ))}
    </div>
  );
};

export default Home;
