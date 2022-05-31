import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';

export default function DeleteData() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-sm btn-danger me-2 my-2' onClick={handleShow} style={{ width: '110px' }}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          <h5 style={{ fontSize: '20px', color: 'black' }}>
            Delete Data
          </h5>
          <div style={{ fontSize: '16px', color: 'black' }} className="mt-2">
            Are you sure you want to delete this data?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} style={{ width: '135px' }}>
            NO
          </Button>
          <Button variant="success" style={{ width: '135px' }}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}
