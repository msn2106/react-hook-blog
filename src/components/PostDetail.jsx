import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(firestore, "posts", postId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setPost(docSnap.data())
    }
    fetchPost();
  }, []);

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <p>{post.keyword}</p>
      <p>{post.content}</p>
      <p>- By Mayank</p>
    </div>
  );
};

export default PostDetail;
