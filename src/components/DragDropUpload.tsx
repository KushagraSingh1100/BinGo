import React, { useState, useRef } from "react";
import { Upload } from "lucide-react"; // or any icon lib

const DragDropUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile));
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click(); // open file explorer
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-96 h-48 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick} // 👈 clicking the box opens explorer
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {!file ? (
        <>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mb-3">
            <Upload size={24} className="text-gray-600" />
          </div>
          <p className="text-gray-600 text-sm">
            Drop your image here or click to browse
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={preview!}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-md mb-2"
          />
          <p className="text-sm text-gray-600">{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default DragDropUpload;
