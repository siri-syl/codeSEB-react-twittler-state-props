import React from 'react';
import { Link } from 'react-router-dom';
// TODO : React Router DOM의 Link 컴포넌트를 import 합니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : Link 컴포넌트를 작성하고, to 속성을 이용하여 경로(path)를 연결합니다. */}
      <Link exact to="/" className="far fa-comment-dots"></Link>
      <Link to="/about" className="far fa-question-circle"></Link>
      <Link to="/mypage" className="far fa-user"></Link>
    </section>
  );
};

export default Sidebar;
