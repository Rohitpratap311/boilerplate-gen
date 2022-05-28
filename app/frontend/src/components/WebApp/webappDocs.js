import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Markdown from 'markdown-to-jsx';
import README from '../../README.md'

function QandA() {

  let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(README)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1 style={{ color: "Lightgreen" }}>Documentations</h1>
        
        <h4 style={{ textAlign: "left" }}>
        <ul>
          <li><h2>Main Repo:</h2></li>
          <p>You can find more information about the main repository <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/README.md">here</a>.</p>

          <br/>
          <br/>
          <li><h2>Frontend:</h2></li>

          <p><h3>Angular</h3></p>
          <p>You can find more information about the Angular <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/frontend/Angular/README.md">here</a>.</p>

          <p><h3>React</h3></p>
          <p>You can find more information about the React <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/frontend/React/README.md">here</a>.</p>

          <p><h3>React Native</h3></p>
          <p>You can find more information about the React Native <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/frontend/React/README.md">here</a>.</p>
        
          <br/>
          <br/>
          <li><h2>Backend:</h2></li>
          
          <p><h3>FastAPI</h3></p>
          <p>You can find more information about the FastAPI <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/backend/FastAPI/Readme.md">here</a>.</p>

          <p><h3>Flask</h3></p>
          <p>You can find more information about the Flask <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/backend/Flask/README.md">here</a>.</p>

          <p><h3>NodeJS</h3></p>
          <p>You can find more information about the NodeJS <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/backend/Flask/README.md">here</a>.</p>

          <p><h3>Spring Boot</h3></p>
          <p>You can find more information about the Spring Boot <a style={{ color: "white" }} href="https://github.com/Aerothon-NTP/boilerplate-gen/blob/main/backend/Springboot/Readme.md">here</a>.</p>

        </ul>
        </h4>
      <div style={{ padding: "30px"}}>
        <Paper square style={{ padding: "30px"}}>
          <Markdown children={content.md}/>
        </Paper>
      </div>
    );
  }
  
  export default QandA;
