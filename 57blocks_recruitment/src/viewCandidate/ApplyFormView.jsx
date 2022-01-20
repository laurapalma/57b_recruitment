import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderView from "./HeaderViews.jsx";
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
      <HeaderView />
      <FormView />
    </>
  );
};

export default ApplyFormView;
