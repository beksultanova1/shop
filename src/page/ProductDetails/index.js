import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const getDetails = () => {
        return axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {
       getDetails()
    }, [])
    return (
        <div className="bg-blue-600 flex justify-center items-center mx-64 py-5 m-36 rounded-3xl">
            <img className="rounded-2xl bg-purple-800 m-24" width={300} src={details.image} alt=""/>
            <div className="text-white text-xl">
                <p>{details.category}</p>
                <h6>{details.description}</h6>
                <h1>{details.title}</h1>
                <h2>{details.price}$</h2>
            </div>
        </div>
    );
};

export default ProductDetails;