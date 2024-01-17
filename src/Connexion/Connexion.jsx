import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Link } from "react-router-dom";
import iconLogo from '../assets/icons/logo.svg'


function Connexion() {
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
        <div className="flex justify-content-center">
          <div className="card">
            <h5 className="text-center">Connectez-vous en tant que Admin</h5>
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
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label">
                          <Password
                            id="password"
                            {...input}
                            toggleMask
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "remove-outline": true,
                            })}
                            header={passwordHeader}
                            footer={passwordFooter}
                          />
                          <label
                            htmlFor="password"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Mot de passe
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="accept"
                    type="checkbox"
                    render={({ input, meta }) => (
                      <div className="field-checkbox">
                        <Checkbox
                          inputId="accept"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="accept"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Gardez-moi connecté
                        </label>
                      </div>
                    )}
                  />

                  <Link to="/admin/dashboard">
                    <Button
                      type="submit"
                      label="Se connecter"
                      className="mt-2 bouton"
                    />
                  </Link>
                </form>
              )}
            />
          </div>
        </div>
        <div className="form-footer">
          <Link to="/rejet" style={{ textDecoration: "none" }}>
            <h5>Mot de passe oublié?</h5>
          </Link>
          <div>
            <p>
              Vous n'avez pas de compte?{" "}
              <Link to="/inscription" style={{ textDecoration: "none" }}>
                <span>S'inscrire</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
