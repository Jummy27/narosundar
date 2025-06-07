import { Link, NavLink } from "react-router-dom";
import {FiMenu} from 'react-icons/fi';
import { pageLinks } from "../data";
import { useState } from "react";
import logo from "../images/logo/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [hover, setHover] = useState(false);

  

 

  return (
    <header className="sticky top-0 bg-primary flex h-[70px] z-20">
      <div className="flex grow justify-between items-center mr-4 px-8">
        <Link to="/">
        <img src={logo} alt="Narosundar" className="logo"/>
        </Link>

        <nav className="relative hidden lg:flex lg:space-x-6">
          {pageLinks.map((link) => {
            const { id, name, path } = link;
            
            return (
              name === 'blog' ?
              <div className="flex items-center h-full" onMouseEnter={() =>
                setHover(true)}
                onMouseLeave={() =>
                  setHover(false)}>
                   
                    <NavLink key={id} to={path} className="uppercase text-sm font-semibold text-white text-center hover:text-secondary">
                      {name}
                    </NavLink>

                    {hover &&
                    <div className="absolute top-5 right-0 flex flex-col items-start bg-black w-55 py-10 px-5">
                      <NavLink to={'/blog'} className="uppercase text-sm font-semibold text-white hover:text-secondary py-1.5">
                    BLOG
                      </NavLink>

                       <NavLink to={'/blogdetails'} className="uppercase text-sm font-semibold text-white hover:text-secondary py-1.5">
                      BLOG DETAILS
                      </NavLink>

                       <NavLink to={'/elements'} className="uppercase text-sm font-semibold text-white hover:text-secondary py-1.5">
                      ELEMENTS
                      </NavLink>

                    </div>
                    }
                    </div>
                    :

              <div>
              <NavLink key={id} to={path} 
              className="uppercase text-sm font-semibold text-white hover:text-red-500">
                {name}

              </NavLink>
              </div>
            )
          })}
        </nav>
      </div>
      
      <button className="hidden lg:block uppercase text-white font-bold 
      text-base bg-secondary px-5 w-[200px] ms-auto ">
        Free Quote
        </button>
        

        <button className="text-white px-8 cursor-pointer lg:hidden" onClick={toggleMenu}>
        <FiMenu className="text-2xl" />
         

        </button>

        {/* Mobile Navigation*/}

        <nav className={`lg:hidden absolute h-screen top-0 left-0 bg-white
        lg:bg-transparent transition-all duration-300 w-1/3 py-10 ${ isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          {
            pageLinks.map((link)=>{
              const {id, name, path} = link;
              return(
                <NavLink key={id} to={path} className="uppercase text-sm font-semibold
                 hover:text-secondary transition duration-300 -tracking-wide block text-black px-6 py-4">
                  {name}</NavLink>
              )
            })
          }
        </nav>

    </header>
  )
}

export default Header;