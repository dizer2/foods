import React, { useState } from 'react'
import "./style/Home.css"
import Popup from '../UI/popup/Popup';
import Telegram from '../telegram/Telegram';
import { Link, animateScroll as scroll } from 'react-scroll';

function Home({cartProduct, setCartProduct, open, setOpen}) {

	const handleTogglePopup = () => {
		setOpen(!open);
	};

	
  return (
	<div className='home'>
		<Telegram />
		{open && ( <Popup cartProduct={cartProduct} setCartProduct={setCartProduct} handleTogglePopup={handleTogglePopup} /> )}
		<header className='home__header'>
			<p className='home__header-logo'>Tammy <span>Food</span></p>
			<nav className='home__header-cart'>
				<div onClick={handleTogglePopup} className="cart">
					<div className="cart__icon"></div>
				</div>
			</nav>
		</header>

		<main className='home__main'>
			<div className="home__main-left">
				<button className='home__button-small'>Fast Delivery</button>
				<p className='main__title'>Discover Your Favourite Food and <span>Test Forever</span></p>
				<p className='main__description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
				<div className="main__box">
				<button className='main__box-button'>
						<Link
						activeClass='active'
						to='delicious'
						spy={true}
						smooth={true}
						offset={30}
						duration={500}
						>
						Get Started
						</Link>
				</button>
					<a target='new_blank' style={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=cfKi70A-6iY">
					<div className="main__box-play">
						<div className="main__play">
							<div className="main__play-icon"></div>
						</div>
						<div className="main__play-text">More Information</div>
					</div>
					</a>
				</div>
			</div>
			<div className="home__main-rigth">
				<div className="home__main-bowl"></div>
			</div>
		</main>
	</div>
  )
}

export default Home;