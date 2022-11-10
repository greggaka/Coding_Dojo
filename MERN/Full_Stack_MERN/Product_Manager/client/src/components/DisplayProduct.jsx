import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplayProduct = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const [deleteClicked, setDeleteClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response.data.results); //go to browser, run inspect and check console to make sure you are getting data
            setProduct(response.data.results)
        })
        .catch((err) => {console.log("This is your catch error: ", err)
        })
    }, [id])

    const deleteProduct = (e, id) => {
        console.log("Delete this product", id);
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((response) => {
            console.log("Delete was successful", response)
            setDeleteClicked(!deleteClicked);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h2>Product Details</h2>
            <h4>{product.title}</h4>
            <p>Price: {product.price} </p>
            <p>Description: {product.description}</p>
            <Link to={`/product/delete/${product._id}`} className="btn btn-danger" onClick={(e) => [deleteProduct(e, product._id)]}>Delete</Link>
        </div>
    )
}

export default DisplayProduct;