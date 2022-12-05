import React from 'react'
import Container from '../layouts/Container'
import Div from '../layouts/Div';
import Img from '../layouts/Img';
import { BiSearchAlt } from 'react-icons/bi'
import { FaRandom } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
const Header = () => {
    return (
        <Div>
            <Container className="max-w-container mx-auto px-4">
                <Div className="flex justify-between items-center py-2.5 border-b border-border py-5">
                    <Div className="w-4/12 flex justify-start items-center">
                        <Div>
                            <a href="" className='mr-12 block'>
                                <Img src="assets/images/logo.png" className="h-11" alt="logo" />
                            </a>
                        </Div>

                        <Div>
                            <a href="" className='flex justify-center items-center w-full'>
                                <Img src="assets/images/user.png" className="rounded-full mr-2.5 h-11 w-11" alt="User Image" />
                                <span className='text-base font-normal font-rubik'>Imran Ahammed</span>
                            </a>
                        </Div>
                    </Div>

                    <Div className="w-4/12">
                        <form className="header-form">
                            <input type="text" placeholder="Search anything..." />
                            <button><BiSearchAlt className='i' /></button>
                        </form>
                    </Div>

                    <Div className="header-widget-group w-4/12 flex align-center justify-end">
                        <a href="" className='flex justify-center items-center relative h-11 w-11 bg-chalk text-text rounded-full duration-300 hover:bg-primary hover:text-white'>
                            <FaRandom />
                            <sub className='absolute top-[-3px] right-[-3px] bg-primary h-6 w-6 flex justify-center items-center text-white rounded-full border-2 ' >0</sub>
                        </a>

                        <a href="" className='flex justify-center items-center relative h-11 w-11 bg-chalk text-text rounded-full duration-300 hover:bg-primary hover:text-white ml-6'>
                            <AiFillHeart />
                            <sub className='absolute top-[-3px] right-[-3px] bg-primary h-6 w-6 flex justify-center items-center text-white rounded-full border-2 ' >0</sub>
                        </a>

                        <button className='flex justify-center items-center relative h-11 w-11 bg-chalk text-text rounded-full duration-300 hover:bg-primary hover:text-white ml-6'>
                            <BsCart4 />
                            <sub className='absolute top-[-3px] right-[-3px] bg-primary h-6 w-6 flex justify-center items-center text-white rounded-full border-2 ' >9+</sub>
                        </button>
                        <Div className="ml-2">
                            <span className='text-xs uppercase whitespace-nowrap font-normal text-heading text-left duration-300 hover:text-primary'>
                                Total price
                                <small className='block font-semibold text-base'>$345.00</small>
                            </span>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Div>
    )
}

export default Header