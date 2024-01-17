import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Col } from "react-bootstrap";
import { FileUpload } from "primereact/fileupload";

function Modals(props) {
  const customBase64Uploader = async (event) => {
    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
    };
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="px-3"
    >
      <Modal.Header closeButton className="border-none">
        <Modal.Title id="contained-modal-title-vcenter">
          CREER UN NOUVEAU HOTEL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5">
        <Form>
          <Row>
            <Col>
              <Form.Label>Nom de l'hotel</Form.Label>
              <Form.Control placeholder="" />
            </Col>
            <Col>
              <Form.Label>Adresse</Form.Label>
              <Form.Control placeholder="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>E-mail</Form.Label>
              <Form.Control placeholder="" />
            </Col>
            <Col>
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control placeholder="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Prix par nuit</Form.Label>
              <Form.Control placeholder="" />
            </Col>
            <Col>
              <Form.Label>Devise</Form.Label>
              <Form.Select defaultValue="F XOF">
                <option>F XOF</option>
                <option>Euro</option>
                <option>Dollar</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <FileUpload
                mode="basic"
                chooseOptions={{ icon: "pi pi-image" }}
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                customUpload
                uploadHandler={customBase64Uploader}
                className="custom-upload-button"
                chooseLabel="Ajouter une photo"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-none">
        <Button
          onClick={props.onHide}
          style={{ backgroundColor: "#474a4d" }}
          className="border-none mx-3"
        >
          Enrégistrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
