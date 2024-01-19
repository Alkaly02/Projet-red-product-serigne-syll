import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function FormConnexion() {
  return (
    <div className="">
      <div className="card form-demo">
        <h5 className="text-start">Connectez-vous en tant que Admin</h5>
        <div className="form">
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input
                type="email"
                className="form-control outline-0"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Mot de passe</label>
              <input
                type="password"
                className="form-control outline-0"
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Accepter les termes et la politique
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <Link to="/admin/dashboard">
              <div className="col">
                <Button text={"Se connecter"} id={"signIn"} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="form-footer mt-2">
        <Link to="/rejet" style={{ textDecoration: "none" }}>
          <h5 className="text-center">Mot de passe oublié?</h5>
        </Link>
        <div>
          <p className="text-center">
            Vous n'avez pas de compte?{" "}
            <Link to="/inscription" style={{ textDecoration: "none" }}>
              <span>S'inscrire</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormConnexion;
