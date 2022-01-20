import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderView from "./HeaderViews.jsx";

const ApplyFormView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 4000);
  }, []);

  return (
    <>
      <HeaderView />
    </>
  );
};

export default ApplyFormView;
