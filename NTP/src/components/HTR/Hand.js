import React from 'react'
import Typography from '@material-ui/core/Typography';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

function Hand() {
    return (
      <div>
        <h1 style={{textAlign : "center"}}>HandWritten Question Paper Converter</h1>
        <br></br>
           <ul>
             <li>
              <Typography variant="h4">
                Overview
              </Typography>
             </li>
             <br></br>
             <Typography paragraph>
                HandWritten Question Paper Converter is one of the easiest softwares
                available on the web that is capable of converting a handwritten question Paper
                into a document which is easily printable and can be directly distributed in the
                exams. The converted document is over 80% accurate. 
             </Typography>
             <li>
              <Typography variant="h4">
                Architecture
              </Typography>
             </li>
           </ul>
        
      </div>
    );
  }
  
  export default Hand;