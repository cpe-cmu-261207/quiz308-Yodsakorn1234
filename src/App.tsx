import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments } from './data/comments';
import Post from './data/Post';
import { get } from 'http';

function App() {
  function render(){
     comments.map((x,key)=>{
       return <Post  key={key} username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies} />
     })
  }
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/img/Pzean.jpg"></img>
            <span className='font-semibold text-lg text-white'>Yodsakorn Likitrungson 630612109</span>
          </div>

          {/* status message */}
          <p className='text-white'>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>100 คน</p>
          </div>

        </div>

        {/* comments section */}
        {render()}
        
      </div>
    </div>
  );
}

export default App;