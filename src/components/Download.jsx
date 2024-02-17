import React from 'react';
import { CardImg } from 'react-bootstrap';
import AppNavBar from '../layouts/AppNavbar';
import logo from "./../img/freely-logo-final.png";
export default function Download() {
	const gotoLinkPlay = () => {
		window.open("https://play.google.com/store/apps/details?id=com.freellyapp", "_blank");
			};

			const gotoLinkIos = () => {
				window.open("https://apps.apple.com/us/app/freelly-bikepool-carpool/id6476261777", "_blank");
					};



	return (
		<div style={{display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
		}}>
			<AppNavBar/>

		<div style={{
			display:"flex",
			flexDirection:"column",
		alignItems: 'center',
		justifyContent: 'center',

		}}>
		<CardImg
		alt="Card image cap"
		bottom
		src={logo}
		style={{
			width:"50%",
			display:"flex",
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom:20
		}}
		/>
		<h2 className='text-center mb-5 mt-5'>Freelly অ্যাপ ডাউনলোড করতে নিচের লিংকগুলো ভিজিট করুন </h2>
		<div style={{display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		}}>
			<button className="downloadApp-banner-play" onClick={gotoLinkPlay}></button>
			<button className="downloadApp-banner-ios" onClick={gotoLinkIos}></button>
			</div>

	</div>

		</div>
	)
}
