import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorites} = useSelector(s => s.favorite)
    return (
        <div className="basis-3/12 m-20">
            <div className="flex flex-wrap justify-center gap-14">
                {
                    favorites.map(el => <ProductCard product={el}/>)
                }
            </div>
        </div>
    );
};

export default Favorite;