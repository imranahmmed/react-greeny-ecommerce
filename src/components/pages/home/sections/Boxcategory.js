import React from 'react'
import Div from '../../../layouts/Div'
import List from '../../../layouts/List'
import Boxsinglecategory from './Boxsinglecategory'
import Slider from "react-slick";

const Boxcategory = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 2,
		autoplay: true,
	};
	return (
		<Div className='container mx-auto mt-8 mb-28'>
			<List className='w-full'>
				<Slider {...settings}>
					<Boxsinglecategory catName='Vegetables' src='assets/images/suggest/01.jpg' />
					<Boxsinglecategory catName='Fruites' src='assets/images/suggest/02.jpg' />
					<Boxsinglecategory catName='grocery' src='assets/images/suggest/03.jpg' />
					<Boxsinglecategory catName='Milk' src='assets/images/suggest/04.jpg' />
					<Boxsinglecategory catName='Fish' src='assets/images/suggest/05.jpg' />
					<Boxsinglecategory catName='Fast Food' src='assets/images/suggest/06.jpg' />
					<Boxsinglecategory catName='Motor' src='assets/images/suggest/07.jpg' />
					<Boxsinglecategory catName='Pizza' src='assets/images/suggest/08.jpg' />
				</Slider>
			</List>
		</Div>
	)
}

export default Boxcategory