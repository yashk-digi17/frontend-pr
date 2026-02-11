// import axiosClient from "./axiosClient";
import axiosClient from "./axiosClient";

export const uploadFileApi = (file, onProgress) => {
  const formData = new FormData();
  formData.append("file", file);

  return axiosClient.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (event) => {
      const percent = Math.round(
        (event.loaded * 100) / event.total
      );
      onProgress(percent);
    },
  });
};
