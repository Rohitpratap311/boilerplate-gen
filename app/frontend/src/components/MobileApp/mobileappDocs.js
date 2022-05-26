import React from 'react'

function Ask() {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1 style={{ color: "Lightgreen" }}>QUESTION GENERATION (Q.G.) MODELS</h1>
        
        <h4 style={{ textAlign: "left" }}>
        <p>Many attempts to generate a question from a given context have been made, but due to the prior models' complexity, it is not considered a mainstream task as Q.A.</p>
        <p>The straightforward Q.G. pipeline would be</p>
        <ul>
          <h2 style={{ textAlign: "left", color: "#c9caea" }}><li><u><i>Handling Long Text</i></u></li></h2>
          <p>Input to the system is not restricted just to sentences or paragraphs, but also document(s) with multiple sections are accepted. With the help of Apache Tika, the raw data can be parsed efficiently even when the input is of the type .doc, .txt, .docx, .pdf, .ppt, .xls, Etc. Even though the Transformer can handle long texts, it often throws out a StackOverFlow Error when provided with many such inputs. Such Errors can be handled by streamlining the input and forwarding them in batches (of sentences or paragraphs) to the model.</p>
          <h2 style={{ textAlign: "left", color: "#c9caea" }}><li><u><i>T5 Tokenizer</i></u></li></h2>
          <p>It is an encoder-decoder model that converts N.L.P. problems to text-to-text format. It helps to classify the sentence as an answer-aware sentence or not. The Transformer accepts the answer-aware ones, discarding the rest.</p>
          <h2 style={{ textAlign: "left", color: "#c9caea" }}><li><u><i>Generating Question</i></u></li></h2>
          <p>By providing the answer and the answer-aware text to an enhanced transformer trained on S.Q.U.A.D. 2.0, questions can be generated.</p>
          <h2 style={{ textAlign: "left", color: "#c9caea" }}><li><u><i>Grouping similar questions</i></u></li></h2>
          <p>When there are different contexts with similar intent, the model might generate similar questions. These edge cases are detected and grouped while compiling.</p>
          <h2 style={{ textAlign: "left", color: "#c9caea" }}><li><u><i>Question Selection</i></u></li></h2>
          <p>With user interaction, the questions formed can be directed to a particular domain to meet the user's requirements. The answer-aware sentences can be clustered and viewed as various domains by performing various N.L.P. tasks (like tokenizing, lemmatizing, and stemming). A set of questions is ranked and selected by performing a Cosine similarity algorithm with all the available domains and the user-selected domains.</p>
        </ul>

        <p>Every Question generated has a corresponding context and an answer. If the user interacts with the system, these questions can be selected and ranked according to his/ her choices. Given a distinct set of all the keywords (the subject to the generated questions), if the user selects a set of keywords, then, by performing a cosine similarity, the most relevant contexts are found, and questions generated.</p>
        </h4>
      </div>
    );
  }
  
  export default Ask;