import React from 'react'
import styled from "styled-components";

function Section() {
  return (
    <Wrap> 
      <ItemText>
        <h1>Model s</h1>
        <p>Order online for Touchless elivery </p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>
custom Order
        </LeftButton>
        <RightButton>
Existing Inventory
        </RightButton>
      </ButtonGroup>
      </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat; 
background-image:url("/images/model-s.jpg");
display:flex;
flex-direction:column;
justify-content:space-between;
align-_items:center;
`

const ItemText = styled.div`
padding-top:18vh;
text-align:center;

`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;

`

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cucursor:pointer;
`;
const RightButton = styled(LeftButton)``;