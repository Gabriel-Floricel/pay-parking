import { useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function App() {
  const [parking, setParking] = useState(5);
  const [parkSpaces, setParkSpaces] = useState([]);
  const [show, setShow] = useState(false);
  const [exist, setExist] = useState(false);
  const inputRef = useRef();
  const finalTimeRef = useRef(0);

  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const parkTime = new Date().getTime();

    parkSpaces.forEach((element) => {
      if (element.plateNumber === inputRef.current.value.toUpperCase()) {
        alert("This car already exists!");
      }
    });

    setParkSpaces((current) => [
      ...current,
      { plateNumber: inputRef.current.value.toUpperCase(), time: parkTime },
    ]);
    setParking((current) => current - 1);
  };

  const handleClick = () => {
    const array = [...parkSpaces];

    for (let i = 0; i < array.length; i++) {
      if (inputRef.current.value.toUpperCase() === array[i].plateNumber) {
        let totalTime = Math.floor(
          (new Date("2021-06-31").getTime() - array[i].time) / 1000
        );

        finalTimeRef.current = Math.round(totalTime / 60);

        array.splice(i, 1);
        setParking((current) => current + 1);
        setShow(true);
      }
    }
    return setParkSpaces([...array]);
  };

  return (
    <div>
      <section className='main'>
        <h1>Parking spaces available: {parking} </h1>
        <h2>Currently occupied parking spaces:</h2>
        <ol>
          {parkSpaces.map((e, index) => (
            <li key={index}>Car number: {e.plateNumber}</li>
          ))}
        </ol>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='park'>Enter your license plate number</label>
            <br />
            <input id='park' type='text' ref={inputRef} />
          </div>

          <div>
            <input
              disabled={parking === 0}
              type='submit'
              className='btn btn-primary'
              value='Enter parking'
            />
            {parking === 0 && <span role='alert'>The parking is full!</span>}
          </div>

          <div>
            <input
              type='button'
              className='btn btn-danger'
              value='Exit parking'
              htmlFor='park'
              onClick={handleClick}
            />
          </div>
        </form>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Parking summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Your parking time was ${Math.ceil(finalTimeRef.current / 60)} ${
            Math.ceil(finalTimeRef.current / 60) > 1 ? "hours," : "hour,"
          } 
            and a total of ${
              10 + Math.floor(finalTimeRef.current / 60) * 5
            } RON must be paid.
          `}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Proceed to payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
