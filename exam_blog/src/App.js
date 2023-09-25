// /* eslint-diable */
// 이 기능은 warning을 없애줌 !

import logo from './logo.svg';
import './App.css'; // app.css 경로
import { useState } from 'react';

function App() {

  let post = "리액트 사용 방법";

  let [logo, setLogo] = useState('React Blog');
  let [title, setTitle] = useState('스테이트 사용 방법');
  let [title2, setTitle2] = useState(['리액트 사용 방법', '테스트 사용 방법', '인터넷 사용 방법']);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0, 0, 0]);



  function change_title() {
    setTitle('좋아요ㅎㅎ')
  }




  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <h4 style={{ color: 'red', fontSize: '16px' }}> {post} </h4>
      <button onClick={change_title} >스테이트 글 변경</button>
      <button onClick={() => {
        let copy_title2 = [...title2];
        copy_title2[0] = 'test1 method';
        setTitle2(copy_title2);
        // console.log(title2[0]);
      }} >테스트 글 변경</button>

      <button onClick={() => {
        let copy2_title2 = [...title2];
        setTitle2(copy2_title2.sort());
      }} >가나다순으로 변경</button>

      {
        title2.map(function (title_name, i) {
          return (
            <div className="list" key={i}>
              <h4>{title2[i]} <span onClick={() => {
                let copy_like = [...like];
                copy_like[i] += 1;
                setLike(copy_like);
              }}>👍</span> {like[i]} </h4>
              <p>09월 25일 발행</p>
            </div>
          )
        })
      }


      {
        modal == true ? <Modal /> : null
      }

      {/* <Modal></Modal> */}
      {/* <Modal/>  이것도 가능 */}


    </div>
  );
}

// component 만드는 법
// 만드는 이유 3가지
// 1. 반복적인 html 축약
// 2. 큰 페이지들을 component로 만들면 좋다.
// 3. 자주 변경되는 것들을 만들어놓으면 좋다.
function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </> // 2개 이상의 div를 만들어야겠다면 큰 걸로 감싸면 됨
    // 이처럼 아무것도 없는 걸 fragment 문법을 사용한다함
  )
}

export default App;
