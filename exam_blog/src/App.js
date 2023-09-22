import logo from './logo.svg';
import './App.css'; // app.css 경로

function App() {

  let post = "하하";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그얌</h4>
      </div>
      <h4 style={{ color: 'red', fontSize: '16px' }}> {post} </h4>
    </div>
  );
}

export default App;
