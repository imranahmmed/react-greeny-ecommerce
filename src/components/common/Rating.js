import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Div from '../layouts/Div'

const Rating = ({className}) => {
    return (
        <Div className={className}>
            <BsStarFill className='text-yellow text-sm' />
            <BsStarFill className='text-yellow text-sm' />
            <BsStarFill className='text-yellow text-sm' />
            <BsStarFill className='text-yellow text-sm' />
            <BsStarHalf className='text-yellow text-sm' />
            <a href="#" className='text-gray text-sm'>(24)</a>
        </Div>
    )
}

export default Rating