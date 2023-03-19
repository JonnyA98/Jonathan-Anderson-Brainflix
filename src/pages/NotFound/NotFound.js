import { useEffect, useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0065ad",
};

const NotFound = () => {
  let [loading] = useState(true);
  let [color] = useState("#0095ff");
  const navigate = useNavigate();
  useEffect(() => {
    try {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch {}
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Sorry!</h1>
      <h2>The page you are looking for doesn't exist!</h2>
      <h3>You will be redicted back to the homepage in 3 seconds</h3>
      <DotLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </>
  );
};

export default NotFound;
