import '../../App.css'

import logo from '../../Assets/image/logo.png'
import { NavLink } from 'react-router-dom'

const headerList = [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "About Us",
      href: "/aboutus",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact Us",
      href: "/contactus",
    },
  ];
  
  interface IHeaderItem {
    label: string;
    href: string;
  }
  
  const HeaderItem = ({ label, href }: IHeaderItem) => {
    return (
      <li className="header_navbar-item">
        <NavLink to={href}>{label}</NavLink>
      </li>
    );
  };

  const Header = () => {
    return (
      <div id="header">
        <ul className="header_navbar-list">
          <li className="header_navbar-item">
            <img src={logo} alt="logo_theBox" />
          </li>
          <li className="header_navbar-item text-italic text-bold">The</li>
          <div>Box</div>
        </ul>
        <ul className="header_navbar-list">
          {
            headerList.map((item, index) => (
              <HeaderItem key={index} {...item} />
            ))
          }
        </ul>
      </div>
    
    );
  };
  export default Header;