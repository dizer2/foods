import React, { useEffect, useState } from 'react'
import Deliciou from "../../API/delicious.json"
import "./style/Delicious.css"
import Pagination from '@mui/material/Pagination';


function Delicious({cartProduct, setCartProduct}) {
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  
  
  useEffect(() => {
    const maxPage = Math.max(...Deliciou.map(item => item.page));
    setAllPage(maxPage);
  }, []);

  const changePage = (event, thisPage) => {
    setPage(thisPage);
  }

  const addToCartProduct = (id) => {
    console.log(id);
    setCartProduct((prevCartProduct) => {
      const productIndex = prevCartProduct.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        return prevCartProduct.map((product, index) => {
          if (index === productIndex) {
            return {
              ...product,
              count: product.count + 1,
            };
          }
          return product;
        });
      } else {
        const productToAdd = Deliciou.find((product) => product.id === id);
        if (productToAdd) {
          return [...prevCartProduct, { ...productToAdd, count: 1 }];
        }
      }
      return prevCartProduct;
    });
  };

  useEffect(() => {
    console.log(cartProduct)
    localStorage.setItem("CARTPRODUCT", JSON.stringify(cartProduct));
  }, [cartProduct]);

  return (
	<div className='delicious' id='delicious'>
		<div className="delicious__header">
			<p className='delicious__header-title'>Our Delicious Dish</p>
			<p className='delicious__header-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
		</div>

		<div className="delicious__main">
			
		{Deliciou.filter(item => item.page === page).map(item => {
      return (
        <div key={item.id} className="delicious__main-card">
          <div className="cart__img cart__img1">
            <img src={item.url} alt={item.name} />
          </div>
          <div className="card__container">
            <p className='card__title'>{item.name}</p>
            <p className='card__description'>Lorem Ipsum is simply dummy text of the printing and typesetting....</p>
            <div className="card__box-price">
              <p className='card__price'>${item.price}</p>
              <div className="card__icon">
                <div onClick={() => addToCartProduct(item.id)} id={item.id} className="card__icon-img card__icon-buy"></div>
                <div className="card__icon-img card__icon-share"></div>
              </div>
            </div>
          </div>
        </div>
      );
   })}
		</div>
    <div className="delicious__pagination">
      <Pagination 
          count={allPage} 
          color="secondary" 
          onChange={changePage}
      />
    </div>
	</div>
  )
}

export default Delicious;