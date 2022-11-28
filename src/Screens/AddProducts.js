
import '../Components/UI/AddProducts.css';
import {Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import axios from "axios";

function AddProducts() {
  
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });
  
const formValidation = (items)=>{
    
}


  const submitProduct = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      baseURL: "https://fakestoreapi.com",
      url: `/products`,
      data: data,
    }).then((response) => {
      console.log("response:", response.data);
     
      formValidation(response.data);


    });




    
    setData({
        title: "",
        description: "",
        price: "",
        image: null,
      });

  };

  return (
    <div className='d-flex justify-content-center'>
      
      <Form >
      <h1 className="m-4">Add a new Product</h1>
        <Form.Group className="mb-5 col-12" >
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter Title"
            type="text"
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });  
            }}
          />
        </Form.Group>
        <Form.Group className="mb-5 col-12" >
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Enter Description"
          type='text'
            value={data.description}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
          />
        </Form.Group>{" "}
        <Form.Group className="mb-5 col-12">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="Enter Price"
            type="number"
            value={data.price}
            onChange={(e) => {
              setData({ ...data, price: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-5 col-12" >
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type={"file"}
            onChange={(e) => {
              setData({
                ...data,
                image: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />{data.image &&
          <img className="img" alt='img...'
            src={data.image}
          />}
        </Form.Group>
    
        <Button onClick={submitProduct} as="a" variant="primary">
        Submit Product
  </Button>
      </Form>
   
    </div>
  );
}

export default AddProducts;