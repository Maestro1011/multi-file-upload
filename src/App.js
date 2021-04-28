import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from './component/upload-file-component';

class App extends Component{
  render(){
    return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-2">
        <h3>File Uploader</h3>
        <h4>React Project for multiple file upload</h4>
      </div>

      <UploadFiles />
    </div>
  );
  }
}

export default App;