import React from 'react'

const ListItem = ({ itemContent, className }) => {
    return (
        <li className={className}>{itemContent}</li>
    )
}

export default ListItem