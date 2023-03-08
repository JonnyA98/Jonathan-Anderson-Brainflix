import UploadForm from "../../components/UploadForm/UploadForm";
import "./Upload.scss";
import { useState } from "react";

const Upload = () => {
  const [description, setDescription] = useState(
    "Add a description to your video"
  );

  const descriptionHandler = () => {
    setDescription();
  };

  return (
    <UploadForm
      className="upload"
      description={description}
      descriptionHandler={descriptionHandler}
    />
  );
};

export default Upload;
