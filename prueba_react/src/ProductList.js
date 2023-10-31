import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortPrice, setSortPrice]= useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
      
      const productOrdenados = sortPrice ? response.data.sort((a,b)=>a.price - b.price): response.data
     setProducts(productOrdenados);
    })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      });
  },[sortPrice]);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={()=>setSortPrice(!sortPrice)}> {sortPrice ? "con orden ascendente" : "con orden descendente"}  </button>
    </div>
  );
};

export default ProductList;
