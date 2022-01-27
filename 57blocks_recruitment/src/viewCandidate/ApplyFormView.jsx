import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormView from "./FormView.jsx";

const ApplyFormView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 6000);
  }, []);

  return (
    <>
      <FormView />
    </>
  );
};

export default ApplyFormView;
