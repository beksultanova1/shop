import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/reducer/reducer";

const Product = () => {
    const  dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(() =>{
        dispatch(getProduct())
    }, [])
    console.log(product)
    return (
        <div className="basis-3/12 m-20">
             <h1 className="text-fuchsia-600 text-center my-5 font-serif">DİOR and Gucci</h1>
           <div className="flex flex-wrap justify-center gap-14">
               {
                  product.map((el) => (
                       <ProductCard product={el}/>
                   ))
               }
           </div>
        </div>
    );
};

export default Product;