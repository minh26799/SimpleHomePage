import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();
// Axios 
  useEffect(() => {
    dispatch(listProducts());
    return () =>{
    };
  }, []);
  /* Use for display the product information on the Home Page*/
    return loading? <div>Loading...</div> : error? <div>error</div> :
    <ul className="products">        
    {
      products.map(product =>
      <li key={product._id}>
        <div className="product">
        <img className="product-image" src={product.image} alt="product" />
        <div className="product-name">
          <Link to={'/product/' + product._id}>{product.name}</Link>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">$ {product.price}</div>
        <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
        </div>
        <button class = "AddButton">Add</button>
      </li>)
    }
</ul>
}

export default HomeScreen;