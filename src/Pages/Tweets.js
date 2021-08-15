// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [tweets, setTweets] = useState([...dummyTweets])
  const [userName, setName] = useState("parkhacker");
  const [content, setMsg] = useState("");

  const handleButtonClick = () => {
    var today = new Date();
    
    const tweet = {
          id: tweets.length+1,
          username: userName,
          picture: "https://randomuser.me/api/portraits/men/98.jpg",
          content: content,
          createdAt: today,
          updatedAt: today,
        };
        setTweets([...[tweet], ...tweets])
        setName("parkhacker");
        setMsg("");
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMsg(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue={userName==="" ? userName : "parkhacker"}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  placeholder="your tweet here..."
                  className="tweetForm__input--message"
                  value={content}
                  onChange={handleChangeMsg}
                ></textarea>
                {/* [Clear] TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* [Clear] TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button className="tweetForm__submitButton" value={{userName, content}} onClick={handleButtonClick}>Tweet</button>
              {/* [Clear] TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* [Clear] TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {tweets.map((tweet) => {
          return (
        <Tweet key={tweet.id} tweet={tweet} />
          )
          })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
