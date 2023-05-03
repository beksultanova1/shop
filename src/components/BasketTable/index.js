import React from 'react';
import {useDispatch} from "react-redux";

const BasketTable = ({el}) => {
    const dispatch = useDispatch()
    const deletePro = () => {
        dispatch({type:"DELETE_PRODUCT", payload: el})
    }
    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const decBasket = () => {
        dispatch({type: "DEC_BASKET"})
    }
    return (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4">
                    <img src={el.image} width={100} alt="#"/>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {el.title}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex">
                    <button onClick={decBasket}>-</button>
                    <p className="mx-2">{el.count}</p>
                    <button onClick={addBasket}>+</button>
                </div>
                </th>
                <td className="px-6 py-4">
                    {el.price * el.count}$
                </td>
                <td className="px-6 py-4">
                    <button onClick={deletePro} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                     Delete</button>
                </td>
            </tr>
    );
};

export default BasketTable;