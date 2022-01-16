import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        imgBackgroung="model-s.jpg"
        leftButton ="Customer order"
        rightButton = "Existing Inventory"
      />
       <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        imgBackgroung="model-y.jpg"
        leftButton ="Customer order"
        rightButton = "Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        imgBackgroung="model-3.jpg"
        leftButton ="Customer order"
        rightButton = "Existing Inventory"
      />
       <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        imgBackgroung="model-x.jpg"
        leftButton ="Customer order"
        rightButton = "Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        imgBackgroung="solar-panel.jpg"
        leftButton ="Customer order"
        rightButton = "Existing Inventory"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        imgBackgroung="solar-roof.jpg"
        leftButton ="Customer order"
        rightButton = "Existing Inventory"
      />
       <Section
        title="Accessories"
        imgBackgroung="accessories.jpg"
        leftButton ="shop now"
        
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
