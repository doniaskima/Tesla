import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "react-reveal/Fade";
import CloseIcon from "@mui/icons-material/Close";

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
        <CustomMenu />
      </RightMenu>
      <BurgerNav>
        <CloseWrapper>
          <CustomClose />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
      </BurgerNav>
    </Conatiner>
  );
}

export default Header;

const Conatiner = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  buttom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`;
 
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`;
