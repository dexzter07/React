import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./component/Greet"
import Welcome  from "./component/welcome"
import Message from "./component/message"
import Count from "./component/count"
import Difference from "./component//difference."
import ParentComponent from "./component/parentComponent"
import NameList from "./component/nameList"
function App() {
  return (
    <div className="App">
      
      {/* <Greet name = "'Iron Man'" rname = "'RDJ'">
        <q>I love you 3000</q>
      </Greet>
      <Greet name = "'Hulk'" rname = "'Bruce'"/>
      <button>Smash</button>
      <Welcome name = "'Black Widow'" rname="'Romonoff'"/>
      <q>We miss you</q> */}
      {/* <Message/> */}
      {/* <Count/>
      <Difference/> */}
      {/* <ParentComponent/> */}
      <NameList/>
    </div>
  );
}

export default App;
