import React from 'react'
import "./style.css"
import Menu from "./menuApi.js"

const Restaurant = () => {
 return(<>
    <>
        <div className='card-container'>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>1</span>
                    <span className='card-author subtle'>Breakfast</span>
                    <h2 className='card-title'>Maggi</h2>
                    <span className='card-descri[tion subtle'>
                        asdfghjkzxcvbn sdfcghbjn dfcgvhjb xdcgfvhbj
                    </span>
                    <div className='carad-read'>Read</div>
                    {/* <img src = {image} alt= "iamge" className='card-media'></img> */}
                    <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
    </div>
    </>
 </>)
}

export default Restaurant