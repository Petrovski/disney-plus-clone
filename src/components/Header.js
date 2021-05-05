import React from 'react';
import styled from 'styled-components';

function Header() {
  const navItems = [
    {
      name: 'HOME',
      href: 'www.disneyplus.com',
      src: '/images/home-icon.svg',
      alt: 'Home Icon',
    },
    {
      name: 'SEARCH',
      href: 'www.disneyplus.com',
      src: '/images/search-icon.svg',
      alt: 'Search Icon',
    },
    {
      name: 'WATCHLIST',
      href: 'www.disneyplus.com',
      src: '/images/watchlist-icon.svg',
      alt: 'Watchlist Icon',
    },
    {
      name: 'ORIGINALS',
      href: 'www.disneyplus.com',
      src: '/images/original-icon.svg',
      alt: 'Originals Icon',
    },
    {
      name: 'MOVIES',
      href: 'www.disneyplus.com',
      src: '/images/movie-icon.svg',
      alt: 'Movies Icon',
    },
    {
      name: 'SERIES',
      href: 'www.disneyplus.com',
      src: '/images/series-icon.svg',
      alt: 'Series Icon',
    },
  ];

  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        {navItems.map(item => {
          return (
            <a href={item.href}>
              <img src={item.src} alt={item.alt} />
              <span>{item.name}</span>
            </a>
          );
        })}
      </NavMenu>
      <UserImg src='/images/favicon.svg' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hideen;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  a {
    color: inherit;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 24px;
      margin-right: 3px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.3px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
