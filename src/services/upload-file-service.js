import http from '../http-common';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();  // constructor that enables to create a key value pair 

    formData.append("file", file);

    // upload the files
    return http.post("/upload", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  // retrive all files stored
  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
// create a new instance and exports it