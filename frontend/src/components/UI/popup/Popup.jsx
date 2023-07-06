import React, { useEffect, useState } from 'react';
import './style/Popup.css';

function Popup({handleTogglePopup, cartProduct, setCartProduct}) {


  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [emailCart, setEmailCart] = useState("");
  const [address, setAddress] = useState("");
  const [allPrice, setAllPrice] = useState(0);

  useEffect(() => {
	console.log(cartProduct)
	const totalPrice = cartProduct.reduce((total, product) => {
	  return total + (product.price * product.count);
	}, 0);
	setAllPrice(totalPrice);
    localStorage.setItem("CARTPRODUCT", JSON.stringify(cartProduct));
  }, [cartProduct]);

  const handleDecrement = (id) => {
	setCartProduct((prevCartProduct) => {
	  return prevCartProduct.map((product) => {
		if (product.id === id && product.count > 1) {
		  return {
			...product,
			count: product.count - 1,
		  };
		}
		return product;
	  });
	});
  };
  
  const handleIncrement = (id) => {
	setCartProduct((prevCartProduct) => {
	  return prevCartProduct.map((product) => {
		if (product.id === id) {
		  return {
			...product,
			count: product.count + 1,
		  };
		}
		return product;
	  });
	});
  };

  const handleRemove = (id) => {
	setCartProduct((prevCartProduct) => {
	  const updatedCartProduct = prevCartProduct.filter((product) => product.id !== id);
	  localStorage.setItem("CARTPRODUCT", JSON.stringify(updatedCartProduct));
	  return updatedCartProduct;
	});
	setCartProduct((prevMassive) => {
	  const updatedMassive = prevMassive.filter((product) => product.id !== id);
	  localStorage.setItem("CARTPRODUCT", JSON.stringify(updatedMassive));
	  return updatedMassive;
	});
  };

  const sendProduct = async (e) => {
	e.preventDefault();

	const res = await fetch("https://tammy-food-server.onrender.com/product", {
		method: "POST"
		headers: {    
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*' 
		},
		body: JSON.stringify({
			name,
			number,
			emailCart,
			address,
			cartProduct,
			allPrice
		})
	});

	const data = await res.json();
	console.log(data);

	if (data.status === 401 || !data) {
		console.log("error");
	} else {
		setName("");
		setNumber("");
		setEmailCart("");
		setAddress("");
		console.log("Email sent");
	}
}

  return (
	<div className="popup">
			<div onClick={handleTogglePopup} className="popup__close"></div>
			<div className="popup__info">
				<p className='popup__info-title'>Contact Information</p>
				<input onChange={(e) => setName(e.target.value)} className='popup__info-input' type="text" placeholder='Name and surname' />
				<input  onChange={(e) => setNumber(e.target.value)} className='popup__info-input'name='number' type="number" placeholder='Your number' />
				<input onChange={(e) => setEmailCart(e.target.value)} className='popup__info-input' name='email' type="text" placeholder='Your email' />
				<input onChange={(e) => setAddress(e.target.value)} className='popup__info-input' name='address' type="text" placeholder='Your address' />

				<button type='submit' onClick={sendProduct} className='popup__info-button'>Send</button>

			</div>
			<div className="popup__delicious">
				<p className='popup__delicious-title'>To order</p>
				<div className="popup__scroll">

				<div className="popup__delicious-line"></div>
				{cartProduct.map(item => {
				return (
					<div key={item.id} className="popup__delicious-card">
					<div className="card__img">
					<div style={{ backgroundImage: `url('${item.url}')` }} className="card__img-icon"></div>
					</div>
					<div className="card__info">
						<p className='card__info-title'>{item.name}</p>
						<div className="card__info-box">
							<p className='card__price'>{item.price} $</p>
							<div className="card__container">
								<div onClick={() => handleDecrement(item.id)}  className="card__container-box">-</div>
								<p className='card__container-title'>{item.count}</p>
								<div  onClick={() => handleIncrement(item.id)} className="card__container-box">+</div>
							</div>
							<div onClick={() => handleRemove(item.id)} className="card__container-box">
								<div className="card__icon"></div>
							</div>
						</div>
						</div>
					</div>
					);
				})}

				</div>
				<div className="popup__delicious-price">
					<p className='popup__price'>The amount order:</p>
					<p className='popup__price'>{allPrice}$</p>
				</div>
				

			</div>
		</div>
  )
}

export default Popup;