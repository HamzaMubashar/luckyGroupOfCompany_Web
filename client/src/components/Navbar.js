import styled from 'styled-components';
import { useMemo, useState } from 'react';
import colors from '../constants/colors';
import bp from '../constants/breakpoints';
import luckyLogo from '../assets/lucky-logo.png';

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 72px;
  padding: 0 5%;
  background: rgba(10, 22, 40, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.2);
`;

const NavInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${colors.whitePure};
  font-weight: 700;
  text-decoration: none;

  .mark {
    
    border-radius: 8px;
    background: ${colors.whitePure};
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .mark img {
    width: 42px;
    height: 42px;
    object-fit: contain;
    display: block;
  }

  .text {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
  }

  .text span:first-child {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .text span:last-child {
    font-size: 10px;
    color: ${colors.gold};
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: rgba(245, 245, 245, 0.8);

  a {
    font-size: 13.5px;
    letter-spacing: 0.03em;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.gold};
    }
  }

  @media (max-width: ${bp.lg2}) {
    display: none;
  }
`;

const Cta = styled.a`
  padding: 10px 24px;
  border-radius: 6px;
  background: ${colors.gold};
  color: ${colors.navy};
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.04em;

  @media (max-width: ${bp.lg2}) {
    display: none;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${colors.whitePure};
    border-radius: 2px;
  }

  @media (max-width: ${bp.lg2}) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: ${bp.lg2}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: ${colors.navy};
    padding: 24px 4%;
    z-index: 19;
    border-bottom: 1px solid rgba(201, 168, 76, 0.2);

    a {
      color: rgba(245, 245, 245, 0.8);
      text-decoration: none;
      font-size: 15px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .cta {
      margin-top: 12px;
      background: ${colors.gold};
      color: ${colors.navy};
      text-align: center;
      padding: 14px;
      border-radius: 8px;
      font-weight: 600;
      border: none;
    }
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      ['#home', 'Home'],
      ['#about', 'About Us'],
      ['#companies', 'Group Companies'],
      ['#why', 'Why Choose Us'],
    ],
    [],
  );

  return (
    <NavBar>
      <NavInner>
        <Brand href="#home">
          <span className="mark">
            <img src={luckyLogo} alt="Lucky Group logo" />
          </span>
          <span className="text">
            <span>Lucky Group</span>
            <span>of Companies</span>
          </span>
        </Brand>

        <Links>
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </Links>

        <Cta href="#companies">Explore Companies</Cta>

        <Hamburger type="button" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavInner>

      <MobileMenu $open={open}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="cta" href="#companies" onClick={() => setOpen(false)}>
          Explore Companies
        </a>
      </MobileMenu>
    </NavBar>
  );
}
