import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useState([]);

    const [formInfo, setFormInfo] = useState ({
        title:"",
        price:0,
        description:""
    })

    const handleChange = (e) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', formInfo)
        .then((response) => {
            console.log(response);
            setFormInfo(formInfo);
            navigate("/")
        })
        .catch( err => console.log("This is a catch", err))
    }
    
    return (
        <div>
            <h2>Add a New Product</h2>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="title" className='form-label'>Title: </label>
                        <input type="text" className='form-control' name='title' onChange={handleChange}/>
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="price" className='form-label'>Price:</label>
                        <input type="text" className='form-control' name='price' onChange={handleChange}/>
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="description" className='form-label'>Description: </label>
                        <input type="text" className='form-control' name='description' onChange={handleChange}/>
                    </div>
                    <button type="submit" className='btn btn-success'>Add</button>
                </form>
            </div>
            <br/>
        </div>
    )
}

export default AddProduct;