import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ApplyFormView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 4000);
  }, []);

  return <h2>Formulario de Postulación</h2>;
};

export default ApplyFormView;
