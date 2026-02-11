import { useState } from "react";
import { uploadFileApi } from "../api/upload.api";
import UploadProgress from "../components/UploadProgress";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      await uploadFileApi(file, setProgress);
      alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Upload File Here
        </h2>

        <input
          type="file"
          className="block w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`w-full mt-4 py-2 rounded-md text-white
            ${uploading
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {uploading && <UploadProgress progress={progress} />}
      </div>
    </div>
  );
}
