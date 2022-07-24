import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from 'react-reveal/Fade';

function Header() {
  return (
    <Conatiner>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model Y</a>

        <a href="#">Model X</a>

        <a href="#">Model S</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu/>
      </RightMenu>
    </Conatiner>
  );
}

export default Header;

const Conatiner = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width:768px){
    display:none;
  }
`;
const RightMenu = styled.div`
display:flex;
  a {
    font-weight: bold;
    text-transform: uppercase;
    margin-right:10px;
    padding: 0 10px;
 
  }
`;

const CustomMenu =styled(MenuIcon)`
cursor:pointer;
`
