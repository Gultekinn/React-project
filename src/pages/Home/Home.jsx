import React, { useEffect, useState } from 'react'
import './Home.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { add } from '../../redux/İtemSlice/ItemSlice';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      setData(res.data)
    })
  }, [data])

  const handleAdd = (item) => {
    dispatch(add(item))
  };
  return (
    <div>
  <div className="main">
        <div className="main__text__icon">
<FacebookIcon className='brs'/>
<TwitterIcon className='brs'/>
<GoogleIcon className='brs'/>
<FilterDramaIcon className='brs'/>
          </div>
        <div className="main_text">
          
        <div className="main_one">
          <p>speacial price</p> <br />
          <h1>Nylon bled jacket</h1>
          <ul>
            <li>Casual line</li>
            <li>Nylon fix fabric</li>
            <li>Water proof</li>
          </ul>
          <button>DISCOVER MORE</button>
        </div>
        </div>
      </div>
      <div className="divv">
<div className="h1">Best Seller</div>
<div className="h2">New Arrials</div>
<div className="h2">Most Popular</div>
</div>




<div className="products__item">
        {
          data.map((item , index) => (
            <div className="item" key={index}>
          <div className="item__img">
          <img src={item.image} alt="img" />
           </div>
         
          <div className="item__text">
         <h6>{item.title}</h6>
         <span>${item.price}</span>
         <button id='btnn' onClick={() => handleAdd(item)}>< ShoppingBasketIcon className='basket'/></button>
         </div>
          </div>
          ))
        }
      </div>







    </div>
  )
}

export default Home

