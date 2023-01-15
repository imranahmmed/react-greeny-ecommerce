import React, { useState } from 'react';
import HeroSection from '../common/HeroSection';
import Container from '../layouts/Container';
import Div from '../layouts/Div';
import Paginate from '../layouts/Paginate';
import { BiGridAlt } from 'react-icons/bi';
import { TiThList } from 'react-icons/ti';
import Select from '../layouts/Select';
import SidebarFilter from '../common/filter/SidebarFilter';

const Shop = () => {
    const [showNumber, setShowNumber] = useState(20)

    const handleShowNumber = (e) => {
        setShowNumber(+e.target.value)
    }

    return (
        <>
            <HeroSection pageTitle='Products' />

            <Container className='container mx-auto px-3 flex mt-10 '>
                <Div className='w-[25%] bg-transparent px-3 rounded-md'>
                    <SidebarFilter />
                </Div>

                <Div className='w-[75%]'>
                    <Div className='flex items-center justify-between mx-3 mb-5 bg-white p-3 rounded-md border border-border shadow-md'>
                        <Div className='selectBox filterShort flex items-center gap-2 w-[225px]'>
                            <Select onChange={handleShowNumber} selectName='selectSort' selectTitle='Short By :' selectOptions={['featured', 'recommend', 'trending', 'Price Low to High', 'Price Hign to low']} />
                        </Div>

                        <Div className='selectBox filterShow flex items-center gap-2 w-[125px]'>
                            <Select onChange={handleShowNumber} selectName='selectShow' selectTitle='Show :' selectOptions={[20, 40, 80, 100, 10]} />
                        </Div>

                        <Div className='flex gap-3 text-2xl text-text cursor-pointer'>
                            <BiGridAlt />
                            <TiThList />
                        </Div>
                    </Div>

                    <Paginate itemsPerPage={showNumber} />
                </Div>
            </Container>
        </>
    )
}

export default Shop