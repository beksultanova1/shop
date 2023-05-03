import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RiShoppingBasketFill} from "react-icons/ri";
import {AiTwotoneHeart} from "react-icons/ai";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const [button, setButton] = useState(false)
    const {favorites} = useSelector(s => s.favorite)
    const {basket} = useSelector(s => s.basket)
    const heart = favorites.some(some => some.id === product.id)
    const  bas = basket.some(some => some.id === product.id)
    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: product})
    }
    const btnBas = () => {
        setButton(!button)
    }
    const favoriteBtn = () => {
        dispatch({type: "ADD_TO_FAVORİTE", payload: product})
    }
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/details/${product.id}`}>
                    <img className="rounded-t-lg" src={product.image} alt=""/>
                </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}$</p>
                {
                    bas ?
                        <Link to={"/basket"}>
                            <button type="button"
                                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                <RiShoppingBasketFill/>
                            </button>
                        </Link>
                        : <button onClick={() =>{
                            addBasket()
                            btnBas()
                           }
                        }
                             className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                       add basket</button>
                }
                <button onClick={favoriteBtn}
                        className="mx-3  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                     <AiTwotoneHeart className={heart ? "text-red-800" : "text-white"}/>
                </button>
            </div>
        </div>
    );
};
export default ProductCard;