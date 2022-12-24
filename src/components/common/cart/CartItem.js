import React from 'react'
import Div from '../../layouts/Div'
import Img from '../../layouts/Img'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import Button from '../../layouts/Button'


const CartItem = () => {
    return (
        <Div className='group cart-item flex items-start border-b border-border py-3 cursor-pointer'>
            <Div className='cart-media w-28 relative rounded-lg overflow-hidden mr-6'>
                <a href="#">
                    <Img src='assets/images/product/01.jpg' className='w-full'></Img>
                </a>

                <Div className='absolute top-0 left-0 h-full w-full scale-0 bg-transparent flex justify-center items-center duration-300 group-hover:scale-100'>
                    <Button className='h-8 w-7 bg-white flex justify-center items-center rounded'>
                        <RiDeleteBin5Line className='text-red' />
                    </Button>
                </Div>
            </Div>

            <Div>
                <Div className='product-info mb-6'>
                    <h6 className='font-normal'>Existing Product Name</h6>
                    <span className='text-sm'>Unit Price - $8.75</span>
                </Div>

                <Div className='cart-action-group'>
                    <Div className='cart-action flex items-center mt-4'>
                        <Button className='bg-chalk mr-2 rounded p-2'> <BsPlusLg /> </Button>
                        <input type="text" value='30' className='w-10 py-1 bg-chalk mx-1 rounded text-center' />
                        <Button className='bg-chalk ml-2 rounded p-2'> <BiMinus /> </Button>

                        <h6 className='ml-3 text-primary font-medium'>$56.98</h6>
                    </Div>
                </Div>
            </Div>

        </Div>
    )
}

export default CartItem