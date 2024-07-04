import React from 'react'
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">WILDBEANS</a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. </p>
          </div>
          <a href="mailto:thavashankarj@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>A wildbeans product | <a className="underlined" href="https://github.com/THAVASHANKARRAJA" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default App;