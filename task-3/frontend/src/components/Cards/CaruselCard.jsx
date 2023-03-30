import React from 'react'
import './styles.css'

export default function CaruselCard({productName, price, description, imgUrl}) {
    return (
        <div className='cardContainer'>
            <div className='imgC'>
                <img src={imgUrl} alt={productName} className='img' loading="lazy"/>
            </div>
            <p className='cardP'>{productName}</p>
            <p className='price'>{price}</p>
            <p className='description'>{description}</p>
        </div>
    )
}
