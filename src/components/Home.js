import React from 'react'
import styled from "styled-components";
import Section from "./Section"
function Home() {
   return (
     <Container>
       <Section
         title="Model S"
         description="Order online for Touchless elivery "
         backgroundImg="model-s.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
       />
       <Section
         title="Model Y"
         description="Order online for Touchless elivery "
         backgroundImg="model-y.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
       />
       <Section
         title="Model 3"
         description="Order online for Touchless elivery "
         backgroundImg="model-3.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
       />
       <Section
         title="Model X"
         description="Order online for Touchless elivery "
         backgroundImg="model-x.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
       />
     </Container>
   );
}
 


export default Home

const Container = styled.div`
height:100vh;
`