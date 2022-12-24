import React from 'react'
import Div from '../../../layouts/Div'
import Img from '../../../layouts/Img'
import List from '../../../layouts/List'
import ListItem from '../../../layouts/ListItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
const Boxcategory = () => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1
	};

	return (
		<Div className='container mx-auto my-5'>
			<List className='w-full'>
				<Slider {...settings}>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
					<Boxcategory src='assets/images/suggest/01.jpg'/>
				</Slider>
			</List>
		</Div>
	)
}

export default Boxcategory