import React from 'react'

const Div = ({ children, className, htmlFor }) => {
    return (
        <div className={className} htmlFor={htmlFor}>
            {children}
        </div>
    )
}

export default Div