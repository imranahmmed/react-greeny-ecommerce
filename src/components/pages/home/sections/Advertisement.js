import React from 'react'
import Div from '../../../layouts/Div'
import Container from '../../../layouts/Container'

const Advertisement = ({children, className}) => {
    return (
        <Div className={className}>
            <Container className='container mx-auto px-3 flex flex-wrap gap-8'>
                {children}
            </Container>
        </Div>
    )
}

export default Advertisement