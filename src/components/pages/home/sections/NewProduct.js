import React from 'react'
import SectionHeader from '../../../common/SectionHeader'
import Container from '../../../layouts/Container'
import Product from '../../../common/Product'
import Div from '../../../layouts/Div'
import Button from '../../../layouts/Button'
import { AiFillEye } from 'react-icons/ai'
import FeaturedProduct from '../../../common/FeaturedProduct'


const NewProduct = ({ sectionTitle }) => {
    return (
        <Div className=''>
            <SectionHeader headerTitle={sectionTitle} />
            <Container className='container mx-auto flex flex-wrap'>
                <Product src='assets/images/product/01.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={true} badgeTitle='New' />
                <Product src='assets/images/product/02.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={false} discountPrice='24' unit='kg' badge={true} badgeTitle='New' />
                <Product src='assets/images/product/03.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={false} badgeTitle='New' />
                <Product src='assets/images/product/04.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={false} discountPrice='24' unit='kg' badge={true} badgeTitle='New' />
                <Product src='assets/images/product/05.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={false} discountPrice='24' unit='kg' badge={true} badgeTitle='New' />
                <Product src='assets/images/product/06.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={false} badgeTitle='New' />

                <FeaturedProduct src='assets/images/product/01.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={true} badgeTitle='Feature' />
                
            </Container>
            <Button className='flex items-center justify-center gap-2 px-5 py-3 mb-28 bg-white border-primary border-2 rounded-md text-primary mx-auto text-base font-medium mb-5 duration-300 hover:bg-primary hover:text-white'> <AiFillEye className='text-base' /> Show More </Button>

        </Div>
    )
}

export default NewProduct