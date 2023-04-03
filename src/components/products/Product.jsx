import React from 'react'

const Product = ({product, cart, setCart}) => {
  const onBuy = (product)=>{
    setCart([...cart, product])
  }
  return (
    <div>
        <div className="card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={()=>onBuy(product)}>buy</button>
          </div>
    </div>
  )
}

export default Product
