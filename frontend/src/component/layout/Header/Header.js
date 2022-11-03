import React from 'react'
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt } from 'react-icons/fa'
import { CgSearch } from 'react-icons/cg';
import { FaCartArrowDown } from 'react-icons/fa';
import logo from "../../../images/logo.png"

const Header = () => {
  return (
    <>
      <div>
        <ReactNavbar
          navColor1="white"
          navColor2="hsl(219,48%,8%)"
          burgerColor="orange"
          burgerColorHover="orange"
          logo={logo}
          logoWidth="350px"
          logoHoverColor="orange"
          nav2justifyContent="space-around"
          nav3justifyContent="space-around"
          link1Text="Home"
          link2Text="About"
          link3Text="Products"
          link4Text="Contact"
          link1ColorHover="white"
          link1Color="orange"
          link1Size="1.5rem"
          link1Padding="3vmax"
          profileIcon={true}
          searchIcon={true}
          cartIcon={true}
          profileIconSize="2.1vmax"
          searchIconSize="2.5vmax"
          searchIconMargin="8"
          profileIconMargin="10"
          cartIconMargin="12"
          ProfileIconElement={FaUserAlt}
          SearchIconElement={CgSearch}
          CartIconElement={FaCartArrowDown}
          profileIconColor="orange"
          searchIconColor="Orange"
          cartIconColor="Orange"
          profileIconColorHover="white"
          searchIconColorHover="white"
          cartIconColorHover="white"
          link1Url='/'
          link2Url='/about'
          link3Url='/products'
          link4Url='/contact'
          profileIconUrl='/login'

        />
      </div>
    </>
  )
}

export default Header