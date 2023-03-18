import { useState, CSSProperties } from "react";
import { DotLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0065ad",
};

const UploadComplete = ({ title }) => {
  let [loading] = useState(true);
  let [color] = useState("#0095ff");

  return (
    <>
      <h1>Upload Complete!</h1>
      <h2>Thank you for contributing to our community!</h2>
      <h2> Your video {title} was uploaded</h2>
      <div>
        <DotLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
        />
      </div>
    </>
  );
};

export default UploadComplete;
