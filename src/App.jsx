import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
// import Routeexport from './routes';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/write"
            element={
              <>
                <Header />
                <WritePage />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Header />
                <SearchPage />
              </>
            }
          />
          <Route
            path="/updates"
            element={
              <>
                <Header />
                <UpdatesPage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Mainbody />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="headermain">
      <div className="logo">
        <Link to={'/'}>
          <img src="rec.png" alt="mainlogo" className="mainlogoheader" />
        </Link>
      </div>
      <div className="options">
        <div className="search">
          <Link to={'/search'}>
            <img src="search.png" alt="" className="headerimage" />
          </Link>
        </div>
        <div className="notify">
          <Link to={'/updates'}>
            <img src="bell.png" alt="" className="headerimage" />
          </Link>
        </div>
        <div className="write">
          <Link to={'/write'} className="writebutton">
            <img src="write.png" alt="" className="headerimage" />
            <span className="writetext">Write</span>
          </Link>
        </div>
        <div className="account">
          <div className="accountprofile" onClick={toggleMenu}></div>
          {menuVisible && (
            <div className="accountmenuoptions">
              {/* Your menu options here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Mainbody() {
  return (
    <div className="mainbody">
      <Feed />
      <Sidebar />
    </div>
  );
}

function Feed() {
  return (
    <div className="feedmain">
      <div className="articlesection"></div>
    </div>
  );
}

function Sidebar() {
  return <div className="sidebar">Sidebar</div>;
}

/*Different Pages */
// const textareaEle = document.getElementById('Blogmaintitle');

// textareaEle.addEventListener('input', () => {
//   textarea.style.height = '50px';
//   textarea.style.height = `${textarea.scrollHeight}px`;
// });

function WritePage() {
  return (
    <div className="writepage">
      <div className="publishbutton">Publish</div>
      <div className="writingdiv">
        {/* <textarea
          type="text"
          name="blogtitle"
          id="Blogmaintitle"
          className="blogmaintitle"
          placeholder="Title"
          wrap="hard"
        /> */}
        <TextareaAutosize className="blogmaintitle" placeholder="Title" />
        <TextareaAutosize className="blogsubhead1" placeholder="Section one" />
      </div>
    </div>
  );
}

function UpdatesPage() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat
      libero eveniet vitae? Impedit exercitationem mollitia magni nostrum. Sit,
      beatae alias? Unde minus tempora perspiciatis explicabo recusandae
      expedita? Minima alias officia quisquam nisi expedita ullam! Voluptas
      maxime rem magni ipsam quisquam delectus repellat quis cupiditate quam.
      Maxime maiores distinctio laboriosam cumque fugit, debitis incidunt rem
      eius ut quis, illum laborum id neque qui obcaecati mollitia atque nam
      quisquam sint, pariatur velit quasi. Hic soluta explicabo neque tenetur
      sint ullam et cum, reprehenderit deleniti consectetur nobis fugiat
      praesentium. Fugiat quaerat rerum voluptatem sequi odio, alias
      exercitationem soluta, dicta facilis repellat minus.update
    </div>
  );
}

function SearchPage() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat
      libero eveniet vitae? Impedit exercitationem mollitia magni nostrum. Sit,
      beatae alias? Unde minus tempora perspiciatis explicabo recusandae
      expedita? Minima alias officia quisquam nisi expedita ullam! Voluptas
      maxime rem magni ipsam quisquam delectus repellat quis cupiditate quam.
      Maxime maiores distinctio laboriosam cumque fugit, debitis incidunt rem
      eius ut quis, illum laborum id neque qui obcaecati mollitia atque nam
      quisquam sint, pariatur velit quasi. Hic soluta explicabo neque tenetur
      sint ullam et cum, reprehenderit deleniti consectetur nobis fugiat
      praesentium. Fugiat quaerat rerum voluptatem sequi odio, alias
      exercitationem soluta, dicta facilis repellat minus. Search
    </div>
  );
}
