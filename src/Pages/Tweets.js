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
  
  // TODO-Advanced : 드롭다운 만들기
  const [choice, setChoice] = useState("");

  const tweetsUserNameList = [];
  // 타임라인의 트윗들을 토대로 유저리스트를 만듦. 그 중에서도 겹치는 유저는 골라서 하나로 함.
  for (let i =0; i < tweets.length; i++){
    tweetsUserNameList.push(tweets[i].username);
    for (let n=i+1; n < tweets.length; n++){
      if(tweets[i].username === tweets[n].username){
        tweetsUserNameList.pop();
      }
    }
  }

  const options = tweetsUserNameList.map((tweetsUserName) => {
    return <option key={tweetsUserName} value={tweetsUserName}>{tweetsUserName}</option>;
  });

  const handleSelectOption = (event) => {
    setChoice(event.target.value);
  };

  const onRemove = (id) => {
    // tweet.id 가 매개변수로 작성하지 않는 데이터들만 추출해서 새로운 배열을 만듬
    // = tweet.id 가 id 인 것을 제거함
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };
  
  const filterUserTimeline = tweets.filter((userChoice) => userChoice.username === `${choice}`).map((tweet) => {
    return (
      <Tweet key={tweet.id} tweet={tweet} onRemove={onRemove} />
    )
  })

  const AllTimeline = tweets.map((tweet) => {
    return (
      <Tweet key={tweet.id} tweet={tweet} onRemove={onRemove} />
    )
  })


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
              <button className="tweetForm__submitButton" onClick={handleButtonClick}>Tweet</button>
              {/* [Clear] TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">

        
        {/* [Clear] Advenced TODO : select 태그 완성 */}
        <select onChange={handleSelectOption} value={choice}>
        <option value=''>--click to filter tweets by username--</option>
        {options}
        </select>
      </div>
      <ul className="tweets">
        {/* [Clear] TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {/* [Clear] Advanced TODO : 셀렉트 옵션(드롭다운) 선택에 따라 필터링 되게끔 구현 */}
        {choice !== '' ? filterUserTimeline : AllTimeline}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
