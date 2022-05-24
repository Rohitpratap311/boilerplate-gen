import React from 'react'

function QandA() {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1 style={{ color: "Lightgreen" }}>QUESTION ANSWERING (Q.A.) MODELS</h1>
        
        <h4 style={{ textAlign: "left" }}>
        <ul>
          <li><p>The architecture employed here is an efficient way of preprocessing the raw data before passing it to the Q.A. model, where the input data can be of any form (pdf, word, docs, images, txt, ppt, Xls, Etc.), but the goal remains the same, i.e., to work efficiently with almost any kind of data received from the user.</p></li>
          <li><p>The more metadata available, the more accurate the analysis of the file's content will be. Let it be a scanned pdf or an image; architecture should still work well with the documents by carrying out Optical Character Recognition(O.C.R.), performing content analysis, and further translating the metadata. Therefore, to support maximum document types, extract the metadata from them, perform content analysis, translation, search engine indexing, Etc., the Apache toolkit, Tika, and a FOSS(free and open-source software), can be helpful.</p></li>
          <li><p>Almost every Q.A. architecture based on transformers follows the same pipeline of breaking down the input text into paragraphs and tokenizing it. Further removes the stop words and then performs basic N.L.P. tasks (like lemmatization and stemming) and passes them to the transformer.</p></li>
          <li><p>Given a document, assuming that not every sentence or paragraph is relevant to the query, not all metadata needs to follow the Q.A. pipeline. With the help of a probabilistic relevance model, the document can be filtered and eliminate a majority of the text by ranking texts/documents based on the relevance with a given search query. The Okapi(BM25), a weighting scheme framework, the best-known derivative of the probabilistic relevance model, can rank the text and efficiently query only the informative and relevant text.</p></li>
          <li><p>A neural network-based deep learning model for performing N.L.P. tasks, trained on the S.Q.U.A.D.2.0 dataset, can accurately extract the selected content is required to answer. B.E.R.T. [13][15] (Bidirectional Encoder Representations from Transformers), A.L.B.E.R.T. (Acoustic and Laryngeal Biofeedback Enhancement Real-Time), E.L.E.C.T.R.A. (Efficiently Learning an Encoder that Classifies Token Replacements Accurately), Etc. are some of the widely accepted architecture designs for the Q.A. task.</p></li>
          <li><p>The given architecture can be built on top of any existing Q.A. models to increase its efficiency.</p></li>
        </ul>
        </h4>
      </div>
    );
  }
  
  export default QandA;