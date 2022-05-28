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
      <div style={{ padding: "30px"}}>
        <Paper square style={{ padding: "30px"}}>
          <Markdown children={content.md}/>
        </Paper>
      </div>
    );
  }
  
  export default QandA;