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
import ReactFragment from './component/ReactFragment';
import Hero from './component/hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickedCounter from'./component/clickCounter'
import HoverCount from './component/HoverCount';
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
      {/* <NameList/> */}
      {/* <ReactFragment /> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Flash" />
      </ErrorBoundary>
      <ErrorBoundary>      
      <Hero heroName="joker" />  
      </ErrorBoundary>
           */}
      <ClickedCounter />
      <HoverCount  name="Dexzter"/>


    </div>
  );
}

export default App;
