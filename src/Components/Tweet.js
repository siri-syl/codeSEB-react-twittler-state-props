import React, { useState } from 'react';
import './Tweet.css';


const Tweet = ({tweet, onRemove}) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <span className="tweet__username">{tweet.username/* TODO : 유져 이름이 있어야 합니다. */}</span>
            <span className="tweet__createdAt">{parsedDate/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}</span>
            <button className="tweet__deleteButton" onClick={() => onRemove(tweet.id)}><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
        <div className="tweet__message">
          {tweet.content/* TODO : 트윗 메세지가 있어야 합니다. */}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
