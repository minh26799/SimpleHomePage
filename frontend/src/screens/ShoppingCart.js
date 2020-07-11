import React from 'react';
function ShoppingCart (props) {
    return
    <div>{cart.quantity}</div> 
    <div>{cartprice}</div>
    <ul class="cart">
    {
        cart.map(product =>
        <li key={product.id}>
        <div>{product.name}</div>
        <div>{product.brand}</div>
        <div>{product.price}</div>
        </li>)
        
    }
    
    </ul>
} 