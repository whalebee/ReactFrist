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

  let num = [1, 2];
  let a = num[0]; // a = 1
  let c = num[1]; // c = 2
  let [aa, cc] = [1, 2]; // aa = 1, cc = 2  

  let [like, setLike] = useState(0);

  // 여기서 새로 정의하는게 아니라 span 안에서 arrow 함수로 써도 됨 
  function func_like() {
    setLike(like + 1)
  }

  function change_title() {
    setTitle('좋아요ㅎㅎ')
  }


  let [modal, setModal] = useState(false);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <h4 style={{ color: 'red', fontSize: '16px' }}> {post} </h4>
      <button onClick={change_title} >스테이트 글 변경</button>
      <button onClick={() => {
        // array와 object를 다룰 때는 원본을 보존해두고 수정하자 !
        // let copy_title2 = title2; // 이건 안됨
        // 이유
        // 1. 기존과 최근의 state가 같으면 변경 안 해줌
        // 2. copy_title2이 가리키고 있던 그 안에 내용이 바뀐거지 이 copy_title2이라는 
        // 변수 자체의 값(가르키고 있는 주소 값)이 변한게 아니라서 같다고 판단하는 것
        // 3. console.log(copy_title2 = title2); 같다고 나옴
        let copy_title2 = [...title2]; // 이렇게 shallow copy 하면 됨
        copy_title2[0] = 'test1 method';
        setTitle2(copy_title2);
      }} >테스트 글 변경</button>

      <button onClick={() => {
        let copy2_title2 = [...title2];
        setTitle2(copy2_title2.sort());
      }} >가나다순으로 변경</button>

      <div className="list">
        <h4>{post}</h4>
        <p>09월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{title} <span onClick={func_like}>👍</span> {like}</h4>
        <p>09월 24일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(!modal);
          // modal == true ? setModal(false) : setModal(true); // 이게 내가한건데 위가 더 간단함
        }} >{title2[0]}</h4>
        <p>09월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{title2[1]}</h4>
        <p>09월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{title2[2]}</h4>
        <p>09월 24일 발행</p>
      </div>

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
