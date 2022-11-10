import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            console.log(response.data.results)
            setAllProducts(response.data.results)
        })
        .catch((err) => [console.log("This is your catch error: ", err)])
    }, [deleteClicked])

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
        <div>
            <h4><Link to="/product/add" className='btn btn-primary'>Add Product</Link></h4>
            <h2>All Products</h2>
            <div>
            {
                allProducts.map((product, i) => {
                    return (
                            <p key={i}>
                                <Link to={`/product/${product._id}`}>{product.title}</Link> | 
                                <Link to={`/product/edit/${product._id}`} className="btn btn-primary">Edit</Link> | 
                                <Link to={`/product/delete/${product._id}`} className="btn btn-danger" onClick={(e) => [deleteProduct(e, product._id)]}>Delete</Link>
                            </p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AllProducts;