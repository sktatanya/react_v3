// ProductItem.js 

// import React from "react";

// function ProductItem(props) {
//   const { mainId, displayName, mainType, price, onAddToCart } = props;

//   const handleAddToCart = () => {
//     onAddToCart ({mainId,displayName,mainType,price});
//   }
//   return (
//     <div
//       style={{
//         padding: 10,
//         border: "1px solid #ddd",
//       }}
//     >
//       <h2>{displayName}</h2>
//       <p>{mainType}</p>
//       <h3>{price.finalPrice}</h3>
//       <button onClick={handleAddToCart}>Купить</button>
//     </div>
//   );
// }

// export default ProductItem;



// ProductItem2.js

// import React from "react";
// import classes from "./Shop.module.css";


// function ProductItem(props) {
//   const { mainId, displayName, mainType, price, onAddToCart } = props;

//   const handleAddToCart = () => {
//     onAddToCart({ mainId, displayName, mainType, price });
//   };
//   return (
//     <div className={classes.productItem}>
//       <h2>{displayName}</h2>
//       <p>{mainType}</p>
//       <h3>{price.finalPrice} $</h3>
//       <button onClick={handleAddToCart}>Buy</button>
//     </div>
//   );
// }

// export default ProductItem;





// ProductItem3.js


import React from 'react'

function ProductItem(props) {
  const {
    displayName,
    mainType,
    price
  } = props

  return (
    <div style={{
      'padding': 10,
      'border': '1px solid #ddd'
    }}>
      <h2>{displayName}</h2>
      <p>{mainType}</p>
      <h3>{price.finalPrice}</h3>
      <button onClick={() => 
        props.addToCart(
          displayName,
          mainType,
          price
        )}>Купить</button>
    </div>
  )
}

export default ProductItem