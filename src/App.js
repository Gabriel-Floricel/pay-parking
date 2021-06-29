import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [parking, setParking] = useState(5);
  const [licensePlate, setLicensePlate] = useState("");
  const [parkSpaces, setParkSpaces] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setParkSpaces((current) => [...current, licensePlate.toUpperCase()]);
    setParking((current) => current - 1);
  };

  const handleChange = (event) => {
    // event.persist();
    setLicensePlate(event);
  };

  const handleClick = () => {
    const array = new Array(parkSpaces);
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      if (licensePlate.toUpperCase() === array[i]) {
        array.splice(i, 1);
      }
    }
    console.log(array);
  };

  return (
    <div>
      <section className='main'>
        <h1>Parking spaces available: {parking} </h1>
        <h2>Currently occupied parking spaces:</h2>
        <ol>
          {parkSpaces.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ol>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='park'>Enter your license plate number</label>
            <br />
            <input
              id='park'
              type='text'
              value={licensePlate}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>

          <div>
            <input
              disabled={parking === 0}
              type='submit'
              className='btn btn-primary'
              value='Enter parking'
            />
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
          <p role='alert'>{parking === 0 && "The parking is full!"}</p>
        </form>
      </section>
    </div>
  );
}

export default App;
