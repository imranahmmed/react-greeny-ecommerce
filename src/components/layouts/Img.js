import React from 'react'

const Img = ({ children, className, src, alt }) => {
    return (
        <img className={className} src={src} alt={alt} />
    )
}

export default Img