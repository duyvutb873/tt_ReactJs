import '../../App.css'
// import memo from 'react'

import logo from '../../Assets/image/logo.png'
import { NavLink } from 'react-router-dom'

const headerList = [
  {
    label: 'Home',
    href: '/',
    hasSubItem: false,
    subLabel: [''],
    subHref: ['']
  },
  {
    label: 'About Us',
    href: '/aboutus',
    hasSubItem: false,
    subLabel: [''],
    subHref: ['']
  },
  {
    label: 'Posts',
    href: '/posts',
    hasSubItem: false,
    subLabel: [''],
    subHref: ['']
  },
  {
    label: 'Services',
    href: '/services',
    hasSubItem: false,
    subLabel: [''],
    subHref: ['']
  },
  {
    label: 'Admin',
    href: '/admin',
    hasSubItem: true,
    subLabel: ['Add User', 'Find User'],
    subHref: ['/adduser', '/finduser']
  }
]

interface IHeaderItem {
  label: string;
  href: string;
  hasSubItem: boolean;
  subLabel: string[];
  subHref: string[];
}

const HeaderItem = ({ label, href, hasSubItem, subLabel, subHref }: IHeaderItem) => {
  return (
    <li className="header_navbar-item2">
      <NavLink to={href}>{label}</NavLink>
      
      {hasSubItem && (
        <div className="dropdown">
          <div className="dropdown-menu">
            {subLabel.map((label, index) => (
              <NavLink key={index} to={`${href}${subHref[index]}`}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  return (
    <div id='header'>
      <ul className='header_navbar-list'>
        <li className='header_navbar-item'>
          <img src={logo} alt='logo_theBox' />
        </li>
        <li className='header_navbar-item text-italic text-bold'>The</li>
        <div>Box</div>
      </ul>
      <ul className='header_navbar-list'>
        
          {headerList.map((item, index) => (
            <HeaderItem key={index} {...item} />
          ))}
        
      </ul>
    </div>
  )
}
export default Header
