import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [Productimg, setProductimg] = useState("");
  const [ProductDis, setProductDis] = useState("");

  const sendData = () => {
    Axios.post("http://localhost:3001/entry", {
      Title: ProductName,
      Price: ProductPrice,
      ImageLink: Productimg,
      Discription: ProductDis,
    });
  };

  return (
    <div className="App">
      <h1>CRUD DEMO</h1>

      <div>
        <label>Title</label>
        <input type="text" onChange={(event) => { setProductName(event.target.value) }} />
      </div>


      <div><label>Price</label>
        <input type="Number" onChange={(event) => { setProductPrice(event.target.value) }} /></div>

      <div><label>Img</label>
        <input type="text" onChange={(event) => { setProductimg(event.target.value) }} /></div>

      <div><label>Discr</label>
        <input type="text" onChange={(event) => { setProductDis(event.target.value) }} /></div>




      <div><button onClick={sendData}>SUBMIT</button></div>

    </div>
  );
}

export default App;
