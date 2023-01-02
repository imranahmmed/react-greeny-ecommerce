import React from 'react'
import Img from '../layouts/Img'
import Div from '../layouts/Div'
import { BsBasketFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { HiOutlinePlayPause } from 'react-icons/hi2'

import Button from '../layouts/Button'
import Badge from './Badge'
import Discountprice from './Discountprice'
import Rating from './Rating'
const Product = ({ src, productName, price, currancy, discount, discountPrice, unit, badge, badgeTitle }) => {
    return (
        <Div className='Product w-full sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6'>
            <Div className='group bg-white p-3 text-center rounded-md border-transparent border relative hover:border-primary duration-300 cursor-pointer'>
                <Img className='border-b border-border' src={src}></Img>
                <Rating className='rating flex gap-1 justify-center my-3 items-center'/>
                <Div className='product-content capitalize text-sub-heading text-base font-medium text-center'>
                    <h6>{productName}</h6>
                </Div>
                <Div className='product-price text-center text-base font-medium'>
                    <h6> {discount && <Discountprice currancy={currancy} discountPrice={discountPrice} />} <span className='text-primary'>{currancy}{price}<small>/{unit}</small></span></h6>
                </Div>
                <Button className='product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-border rounded text-base font-normal duration-300 group-hover:bg-primary group-hover:text-white'>
                    <BsBasketFill className='text-base' />
                    <span className='text-base'>Add</span>
                </Button>

                {badge && <Badge title={badgeTitle} className='product-label w-1/4 absolute top-3 left-3' />}


                <Div className='product-widget flex gap-3 items-center mb-10 justify-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] duration-300 invisible group-hover:visible group-hover:mb-0'>
                    <a href="#" className='product-video w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><HiOutlinePlayPause /></a>
                    <a href="#" className='product-view w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><AiFillEye /></a>
                </Div>
            </Div>


        </Div>
    )
}

export default Product