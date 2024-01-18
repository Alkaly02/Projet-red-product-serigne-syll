import React, { useRef } from "react";
import InputModal from "./InputModal";

function FormModals() {
  const fileInputRef = useRef(null);
  const handleImageIconClick = () => {
    // Ajoutez la classe pour rendre l'input visible temporairement
    fileInputRef.current.classList.add("temp-visible");

    // Déclenchez le click de l'input
    fileInputRef.current.click();

    // Supprimez la classe après un court délai
    setTimeout(() => {
      fileInputRef.current.classList.remove("temp-visible");
    }, 100);
  };

  return (
    <div className="modal-body px-5">
      <form>
        <div className="row">
          <InputModal type={"text"} label={"Adresse de l'hotel"} />
          <InputModal type={"text"} label={"Adresse"} />
        </div>
        <div className="row">
          <InputModal type={"email"} label={"E-mail"} />
          <InputModal type={"number"} label={"Numéro de téléphone"} />
        </div>
        <div className="row">
          <InputModal type={"number"} label={"Prix par nuit"} />
          <div className="col">
            <label htmlFor="devise" className="form-label">
              Devise
            </label>
            <select className="form-select" id="devise" defaultValue="F XOF">
              <option>F XOF</option>
              <option>Euro</option>
              <option>Dollar</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col p-0 border rounded py-4 d-flex align-items-center justify-content-center flex-column">
            <input
              type="file"
              className="form-control visually-hidden"
              id="image"
              ref={fileInputRef}
            />
            <span className="ms-2 imageModal" onClick={handleImageIconClick}>
              <i className="bi bi-image fs-1"></i>
            </span>
            <p className="textImg">Ajouter une image</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormModals;
