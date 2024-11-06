import  { styled } from "@mui/material/styles";
import React from "react";
import Header from "./Header";


function Layout({ children }) {
   
    const LayoutContainer = styled("div")({
        layout:{
            width: "100%",
        }
    })
    
  return (
    // <div>
    
      <LayoutContainer>
        <Header />
        {children}
      </LayoutContainer>
    // </div>
  );
}

export default Layout;
