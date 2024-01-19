import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function FormInscription() {
  return (
    <div className="">
      <div className="card form-demo">
        <h5 className="text-start">Inscrivez-vous en tant que Admin</h5>
        <div className="form">
          <div className="row">
            <div className="col">
              <label>Nom</label>
              <input type="text" className="form-control no-outline" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input type="email" className="form-control no-outline" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Mot de passe</label>
              <input type="password" className="form-control no-outline" />
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
            <div className="col">
              <Button text={"S'inscrire"} id={"signUp"} />
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer mt-3">
        <div>
          <p className="m-0 text-center">
            Vous avez déjà un compte?{" "}
            <Link to="/connexion" style={{ textDecoration: "none" }}>
              <span>Se connecter</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormInscription;
