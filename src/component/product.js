import React from "react";
import { usePagination } from "./UsePagination";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from 'react-router-dom';

function Product(params) {
    const { alias } = useParams()



    return <><div><span>Product {alias}</span></div><div><Link to="/products">Назад</Link></div></>
}

export default Product;