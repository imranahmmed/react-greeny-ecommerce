import React from 'react'
import Container from '../layouts/Container'
import Div from '../layouts/Div'
import List from '../layouts/List'
import ListItem from '../layouts/ListItem'
import P from '../layouts/P'
import { MdPhoneAndroid } from 'react-icons/md'
const Navbar = () => {
    return (
        <>
            <Container className="container mx-auto px-4">
                <Div className="flex justify-between items-center border-b border-border py-4">
                    <List className="flex justify-start gap-x-10 font-rubik">
                        <ListItem className="font-medium text-text cursor-pointer hover:text-primary duration-300" itemContent="Home" />
                        <ListItem className="font-medium text-text cursor-pointer hover:text-primary duration-300" itemContent="Shop" />
                        <ListItem className="font-medium text-text cursor-pointer hover:text-primary duration-300" itemContent="About" />
                        <ListItem className="font-medium text-text cursor-pointer hover:text-primary duration-300" itemContent="Journal" />
                        <ListItem className="font-medium text-text cursor-pointer hover:text-primary duration-300" itemContent="Contact" />
                    </List>

                    <Div className="flex align-center">
                        <Div className="flex justify-start items-center mr-5">
                            <MdPhoneAndroid className='text-4xl text-primary mr-4' />
                            <P>
                                <small className='block text-sm capitalize'>call us</small>
                                <span className='text-base font-medium'>(+880) 183 8288 389</span>
                            </P>
                        </Div>
                        <Div className="flex justify-start items-center">
                            <MdPhoneAndroid className='text-4xl text-primary mr-4' />
                            <P>
                                <small className='block text-sm capitalize'>call us</small>
                                <span className='text-base font-medium'>(+880) 183 8288 389</span>
                            </P>
                        </Div>
                    </Div>



                </Div>
            </Container>

        </>
    )
}

export default Navbar