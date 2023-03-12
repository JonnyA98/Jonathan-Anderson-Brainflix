import UploadForm from "../../components/UploadForm/UploadForm";
import UploadComplete from "../../components/UploadComplete/UploadComplete";
import "./Upload.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [componentClass, setComponentClass] = useState(true);
  const [validationTitleClass, setValidationTitleClass] =
    useState("upload-form__input");
  const [validationDescriptionClass, setValidationDescriptionClass] = useState(
    "upload-form__input upload-form__input--text-area"
  );

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
      setComponentClass(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setValidationTitleClass("upload-form__input upload-form__input--invalid");
      setValidationDescriptionClass(
        "upload-form__input upload-form__input--text-area upload-form__input--invalid"
      );
      setTitle("Please add both a title and description");
      setDescription("Please add both a title and description");
    }
  };

  if (componentClass) {
    return (
      <UploadForm
        className="upload"
        uploadHandler={uploadHandler}
        title={title}
        titleHandler={titleHandler}
        description={description}
        descriptionHandler={descriptionHandler}
        validationTitleClass={validationTitleClass}
        validationDescriptionClass={validationDescriptionClass}
      />
    );
  } else {
    return <UploadComplete title={title} description={description} />;
  }
};

export default Upload;
