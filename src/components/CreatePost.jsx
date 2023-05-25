import React from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useFormInput } from "../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  const title = useFormInput('');
  const keyword = useFormInput('');
  const content = useFormInput('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(firestore, 'posts'), {
      title: title.value,
      keyword: keyword.value,
      content: content.value,
      createdAt: new Date()
    })
    // console.log('Document written with ID: ', docRef.id);
    toast.success(`Document written with ID: ${docRef.id} Redirecting to Home...`)
    navigate('/');
  };

  return (
    <div className='create-post'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title</label>
          <input {...title} />
        </div>
        <div className='form-field'>
          <label>Keywords/Hashtags</label>
          <input {...keyword} />
        </div>
        <div className='form-field'>
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className='create-post-btn'>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
