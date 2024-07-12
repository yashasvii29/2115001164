import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AllProducts = () => {
  const products = [
    {
      id:uuidv4(),
      "productName":"Laptop1",
      "price":2236,
      "rating":4.7,
      "discount":63,
      "availability":"yes"

  },
  {
    id:uuidv4(),
    "productName":"Laptop1",
      "price":2236,
      "rating":4.7,
      "discount":63,
      "availability":"yes"
  },
  {
    id:uuidv4(),
    "productName":"Laptop1",
      "price":2236,
      "rating":4.7,
      "discount":63,
      "availability":"yes"
  },
  {
    id:uuidv4(),
    "productName":"Laptop1",
      "price":2236,
      "rating":4.7,
      "discount":63,
      "availability":"yes"
  }
  

  ]
  return (
    <div>
        <h1 className='text-5xl font-bold text-center pb-4 pt-4'>All Products</h1>
        <ul>
      {products.map((product, index) => (
        <li key={product._id}>{product.productName,product.price,product.rating,product.discount,product.availability
        }</li>
      ))}
    </ul>
    </div>
  )
}

export default AllProducts