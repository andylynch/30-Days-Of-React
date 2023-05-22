import logo from './logo.svg';
import './App.css';


import html5 from "./html_logo.png"
import css from "./css_logo.png";
import js from "./js_logo.png";
import reactlogo from "./react_logo.png";

const logos = [html5, css, js, reactlogo];

// Level 2
const Logos = () => {
  const newLocal =  logos.map(x => <div><img src={x}></img></div>);
  return <><div>Frontend Technologies</div><div class="flex">
    {newLocal}</div></>;
 // return body;
}


const SubscribePanel = () => {
   return <div >
    <p  class="middle" >Subscribe</p>
    <p class="middle">Sign up with your email address to receive news and updates</p>
    <div><input type='text' placeholder='First Name' />
    <input type='text' placeholder='Last Name' />
    <input type='email' placeholder='Email' />
    </div>
    <div> <button type='submit' >Subscribe</button></div>
   </div>
}


function App() {
  return (
    <div className="App">
      <Logos />
      <SubscribePanel />
    </div>
  );
}

export default App;
