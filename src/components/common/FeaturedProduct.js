import React from 'react'
import Div from '../layouts/Div'
import Rating from './Rating'
import Img from '../layouts/Img'
import Discountprice from './Discountprice'
import Button from '../layouts/Button'
import Badge from './Badge'
import {BsBasketFill} from 'react-icons/bs'



const FeaturedProduct = ({ children, className, src, productName, price, currancy, discount, discountPrice, unit, badge, badgeTitle }) => {
    return (
        <Div className='w-6/12 bg-white p-5 relative'>
            <Div className='flex items-center'>
                <Div className='w-1/3'>
                    <Img src={src}></Img>
                </Div>

                <Div className='w-2/3 ml-6 pl-6 border-l border-border'>
                    <Div className='product-content capitalize text-sub-heading text-base font-medium text-start'>
                        <h6 className='text-xl'>{productName}</h6>
                    </Div>

                    <Rating className='rating flex gap-1 justify-start my-3 items-center' />
                    <Div className='product-price text-left text-base font-medium'>
                        <h6> {discount && <Discountprice currancy={currancy} discountPrice={discountPrice} />} <span className='text-primary'>{currancy}{price}<small>/{unit}</small></span></h6>
                    </Div>
                    <p>Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>

                    <Button className='product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-border rounded text-base font-normal duration-300 group-hover:bg-primary group-hover:text-white'>
                        <BsBasketFill className='text-base' />
                        <span className='text-base'>Add</span>
                    </Button>

                    {badge && <Badge title={badgeTitle} className='product-label absolute top-3 left-3 text-center' />}
                </Div>
            </Div>
        </Div>
    )
}

export default FeaturedProduct