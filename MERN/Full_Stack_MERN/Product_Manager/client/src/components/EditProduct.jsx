import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios'

const EditProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:0,
        description:""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response.data.results)
            setFormInfo(response.data.results);
        })
        .catch((err) => {console.log("THis is a catch error: ", err)})
    }, [id])

    const handleChange = (e) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo)
        .then((response) => {
        console.log("Updated results: ", response)
        navigate('/');
        })
        .catch(err => console.log("Here is the catch error: ", err))
    }
    return (
        <div>
            <h2>Edit Product</h2>
            <div className='container'>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-3 d-flex">
                        <label htmlFor="title" className="form-label">Title: </label>
                        <input type="text" className='form-control' name='title' onChange={handleChange} value={formInfo.title}/>
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="price" className="form-label">Price: </label>
                        <input type="number" className='form-control' name='price' onChange={handleChange} value={formInfo.price}/>
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="description" className="form-label">Description: </label>
                        <input type="text" className='form-control' name='description' onChange={handleChange} value={formInfo.description}/>
                    </div>
                    <div className="mb-3 d-flex">
                    <button type='submit' className='btn btn-success'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct;