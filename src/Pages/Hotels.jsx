import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "primereact/button";
import HotelsCard from '../components/HotelsCard';
import Modals from '../components/Modals';

function Hotels() {
  const [visible, setVisible] = useState(false);
  const [modalShow, setModalShow] = useState(false);


  return (
    <Link to="/admin/hotels" style={{ textDecoration: "none", color: "#000" }}>
      <div className="hotels">
        <div className="titleHotels d-flex justify-content-between px-4 py-3 align-items-center">
          <h6>Hotels</h6>
          <div className='pb-2'>
            <Button
              type="button"
              label="Créer un nouveau hôtel"
              className="mt-2 bouton"
              color="inherit"
              icon="pi pi-plus"
              onClick={() => setModalShow(true)}
            />
          </div>
        </div>
        <div className="hotelsCard py-5 mt-4">
          <HotelsCard />
        </div>
        <Modals show={modalShow}
          onHide={() => setModalShow(false)} />
      </div>
    </Link>
  );
}

export default Hotels