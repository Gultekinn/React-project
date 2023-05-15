import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Header = () => {
  return (
  
    <div className='custom'>

<div className="navbar">
  
        <div className="navbar__logo">
            <img src="https://supro.arrowtheme.com/pub/media/logo/default/logo.png" alt="" />
        </div>

        <div className="header__items">
        <ul>
          <li>
            <Link className='link' to="">Home</Link>
          </li>
          {/* <li>
            <Link className='link' to=":id">Detail</Link>
          </li> */}
          <li>
            <Link className='link' to="basket">Basket</Link>
          </li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="navbar__searc">
        <input type="text" placeholder='searc entire store here...' /><button><SearchIcon/></button>
      </div>
      <div className="navbar__icon">
        <div className="div1"><PersonOutlineIcon className='icn'/></div>
      <div className="div2"><FavoriteBorderOutlinedIcon  className='icn'/></div>
     <div className="div3"><ShoppingCartOutlinedIcon  className='icn'/></div>
      <div className="div3"><SettingsOutlinedIcon  className='icn'/></div>
      </div>
      </div>



      


    </div>
  )
}

export default Header
