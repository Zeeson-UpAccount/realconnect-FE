import React from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Table, ProgressBar } from "react-bootstrap";

export default function ProgressModal({ handleClose, modalState }) {
  return (
    <div>
      <Modal
        animation={false}
        show={modalState === "modal-progress"}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Body className="pb-4 pt-4">
          <h4 className="font-weight-bold text-center mb-4 text-primary">
            Track Your Progress!
          </h4>
          <Container>
            <Table hover>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Percentage Complete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Construction</td>
                  <td>
                    <ProgressBar striped variant="info" now={40} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rezoning process</td>
                  <td>
                    <ProgressBar striped variant="danger" now={10} />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Environmental assessments</td>
                  <td>
                    <ProgressBar striped variant="warning" now={20} />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Demolition</td>
                  <td>
                    <ProgressBar striped variant="success" now={90} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
