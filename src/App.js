import React, { Component } from 'react';
import './App.css';
import Resource from './Resource';

class App extends Component {
  state = {
    posterName: "David",
    resourceAuthor: 'Maximilian Schwarzmüller',
    authorsSkillLevel: "advanced",
    cohort: "8",
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    category: "React",
    summary: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    resourceType: "video",
    datePublished: "02-01-20",
    videoLength: 2430,
    timeToComplete: 2430,
    rating: 5,
    comments: [
      { user: "David", comment: "This is awesome" },
      { user: "Linda", comment: "Great lecture" }
    ]
  }
  render(){
    return (
      <div className="App">
      <h1> Welcome to Brainhive!!!!</h1>
      <Resource resource={ this.state }/>
      </div>
    );
  }
}

export default App;
