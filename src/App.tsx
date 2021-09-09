import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments, CommentType } from './data/comments';

function App() {
  const generateReplies = (replies: CommentType[]) => {
    return (replies.map(x =>
      <div className="flex p-2 items-start space-x-2 pl-14">
        <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
        <div className="bg-gray-500 rounded-lg p-2">
          <p className="font-semibold text-white">{x.username}</p>
          <p className='text-white'>{x.commentText}</p>
          {x.likeNum > 0 ?
            <div className='flex items-center'>
              <img className='w-4 h-4 mr-1' src='/like.svg'></img>
              <p className='text-gray-300'>{x.likeNum}</p>
            </div> : null}
        </div>
      </div>
    ))
  }


  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/raiden.jpg"></img>
            <span className='font-semibold text-lg text-white'>Yodsakorn likitrungson 630612109</span>
          </div>

          {/* status message */}
          <p className='text-white'>Quiz ยากมากครับ ไม่ไหวแล้ว #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>999 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">
          {comments.map(x =>
            <div>
              <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
                <div className="bg-gray-500 rounded-lg p-2">
                  <p className="font-semibold text-white">{x.username}</p>
                  <p className='text-white'>{x.commentText}</p>
                  {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                  {x.likeNum > 0 ?
                    <div className='flex items-center'>
                      <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                      <p className='text-gray-300'>{x.likeNum}</p>
                    </div> : null}
                </div>
              </div>
              {generateReplies(x.replies)}
            </div>
          )}



        </div>

      </div>
    </div>
  );
}

export default App;