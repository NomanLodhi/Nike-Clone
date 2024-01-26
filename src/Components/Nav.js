import React from 'react'
import  Logo  from '../assets/images/header-logo.svg'
import hamburgerLogo from '../assets/icons/hamburger.svg'
const Nav = () => {
  return (
    <header className='padding-x py-8 fixed w-full top-0 z-10 bg-white'>
        <nav className='flex  items-center '>
            <a href='/' >
<img src={Logo} 
alt="Logo"
className='my-3' 
/>
            </a>
            <ul className="flex  items-center justify-center gap-20 ms-40 font-montserrat   max-lg:hidden ">
<li><a href="#home" className='hover:text-coral-red'>Home</a></li>
<li><a href="#quality" className='hover:text-coral-red'>About Us</a></li>
<li><a href="#products" className='hover:text-coral-red'>Products</a></li>
<li><a href="/" className='hover:text-coral-red'>Contact Us</a></li>
<li><a href="/" className='hover:text-coral-red'>Sign in / Explore now</a></li>
            </ul>
<button className='w-5 h-5 lg:hidden absolute end-0 mx-8 '>
        <img src={hamburgerLogo}
         alt="Hamburger" 
         className=''
         />
</button>


        </nav>
    </header>
  )
}

export default Nav
