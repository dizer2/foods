import React, { useState } from 'react'
import "./style/Footer.css"
import PopupOther from '../UI/popupOther/PopupOther';

function Footer() {
	const [email, setEmail] = useState("");
	const [messege, setMessege] = useState("");
	const [addEmail, setAddEmail] = useState(false);
	const [text, setText] = useState("Thank you for your feedback");


	const addEmailClass = addEmail ? 'delicious__addCart delicious__addCart-keyframe' : 'delicious__addCart';

	const sendEmail = async (e) => {

        e.preventDefault();

        const res = await fetch("https://tammy-food-server.onrender.com/register", {
            method: "POST",
			headers: {    
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*' 
		},
            body: JSON.stringify({
                email,
				messege
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error");
			setText("Oops, an error occurred");
        } else {
            console.log("Email sent");
			setAddEmail(true);
			setTimeout(() => {
				setAddEmail(false);
			}, 1500);
        }
    }




  return (
	<footer className='footer'>
		<PopupOther addCartClass={addEmailClass} text={text}/>
		<div className="footer__block">
			<div className="footer__block-box">
				<div className="footer__icon">
					<div className="footer__icon-img footer__icon-email"></div>
				</div>
				<p className="footer__title"><a href="mailto:info@youremail.com">info@youremail.com</a></p>
			</div>

			<div className="footer__line"></div>

			<div className="footer__block-box">
				<div className="footer__icon">
					<div className="footer__icon-img footer__icon-phone"></div>
				</div>
				<p className="footer__title"><a href="tel:+8803216559985">+880 321 655 9985</a></p>
			</div>
		</div>

		<div className="footer__info">
			<div className="footer__info-top">
				<div className="info__main">
					<p className='info__main-title'>Tammy <span>Food</span></p>
					<p className='info__main-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<div className="info__main-sociable">
				 		<svg className='sociable__img' width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_0_972)"><path className='sociable__img-color' d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="white"/></g><defs><clipPath id="clip0_0_972"><rect width={24} height={24} fill="white"/></clipPath></defs></svg>

						<div className="sociable__line"></div>

						<svg className='sociable__img' width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_0_974)"><path className='sociable__img-color' d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="white"/></g><defs><clipPath id="clip0_0_974"><rect width={24} height={24} fill="white"/></clipPath></defs></svg>

						<div className="sociable__line"></div>

						<svg className='sociable__img' width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_0_976)"><path className='sociable__img-color'  d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75097 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.3449 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.264 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" fill="white" /></g><defs><clipPath id="clip0_0_976"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>

						<div className="sociable__line"></div>

						<svg className='sociable__img' width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_0_978)"><path className='sociable__img-color' d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" fill="white" /></g><defs><clipPath id="clip0_0_978"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>

					</div>
				</div>
				<div className="info__navigation info__navigation-delete">
					<p className='info__navigation-title'>quick link</p>
					<p className='info__navigation-text'>About Us</p>
					<p className='info__navigation-text'>Menu</p>
					<p className='info__navigation-text'>Blog</p>
					<p className='info__navigation-text'>Conatct Us</p>
				</div>

				<div className="info__navigation">
					<p className='info__navigation-title'>news letter</p>
					<p className='info__navigation-text info__navigation-description'>Subscribe our newsletter to get our latest update & news</p>

					<div className="info__navigation-button">
						<input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder='Your email address' />
						<button onClick={sendEmail} type="submit">
							<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_0_990)"><path d="M3 13.0001H9V11.0001H3V1.84611C3.00001 1.75922 3.02267 1.67384 3.06573 1.59838C3.1088 1.52291 3.17078 1.45997 3.24558 1.41576C3.32037 1.37155 3.4054 1.34759 3.49227 1.34625C3.57915 1.34491 3.66487 1.36623 3.741 1.40811L22.203 11.5621C22.2814 11.6053 22.3468 11.6687 22.3923 11.7457C22.4378 11.8228 22.4618 11.9106 22.4618 12.0001C22.4618 12.0896 22.4378 12.1774 22.3923 12.2545C22.3468 12.3315 22.2814 12.3949 22.203 12.4381L3.741 22.5921C3.66487 22.634 3.57915 22.6553 3.49227 22.654C3.4054 22.6526 3.32037 22.6287 3.24558 22.5844C3.17078 22.5402 3.1088 22.4773 3.06573 22.4018C3.02267 22.3264 3.00001 22.241 3 22.1541V13.0001Z" fill="white" /></g><defs><clipPath id="clip0_0_990"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>
						</button>
					</div>
					<div className="info__navigation-button2">
						<input onChange={(e) => setMessege(e.target.value)} name="messeage" type="text" placeholder='Your message' />
					</div>
				</div>

			</div>
			<div className="footer__info-bottom">
				<div className="footer__info-container">
					<p className='footer__info-title'>© Copyright 2021 .Tammy Food. All Right Reserved.</p>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer;