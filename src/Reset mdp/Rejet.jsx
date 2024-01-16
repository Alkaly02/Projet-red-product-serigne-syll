import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Link } from "react-router-dom";
import iconLogo from '../assets/icons/logo.svg'

function Rejet() {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="connexion">
      <div className="form-demo">
        <div className="d-flex mb-4 justify-content-center align-items-center">
          <h2 className="mx-3">
            <img src={iconLogo} alt="icon" className="logoIns" />
          </h2>
          <h2 className="text-white fw-bold">RED PRODUCT</h2>
        </div>
        <div className="flex justify-content-center" style={{width: "40%"}}>
          <div className="card">
            <h5 className="text-start pb-3">Mot de passe oublié?</h5>
            <h5 className="text-start">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</h5>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                name: "",
                email: "",
                password: "",
                date: null,
                country: null,
                accept: false,
              }}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label p-input-icon-right">
                          <i className="pi pi-envelope" />
                          <InputText
                            id="email"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            E-mail
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Button
                    type="submit"
                    label="Envoyer"
                    className="mt-2 bouton"
                  />
                </form>
              )}
            />
          </div>
        </div>
        <div className="form-footer">
          <div>
            <p>
              Revenir à la{" "}
              <Link to="/connexion" style={{ textDecoration: "none" }}>
                <span>Connexion</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rejet;
