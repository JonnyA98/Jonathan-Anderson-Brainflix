import UploadForm from "../../components/UploadForm/UploadForm";
import "./Upload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const descriptionHandler = (newDescription) => {
    setDescription(newDescription);
  };

  const titleHandler = (newTitle) => {
    setTitle(newTitle);
  };

  const navigate = useNavigate();
  let uploadVideoDetails = false;
  if (title && description) {
    uploadVideoDetails = true;
  }

  const uploadHandler = (e) => {
    e.preventDefault();
    if (uploadVideoDetails) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <UploadForm
      className="upload"
      uploadHandler={uploadHandler}
      title={title}
      titleHandler={titleHandler}
      description={description}
      descriptionHandler={descriptionHandler}
    />
  );
};

export default Upload;
