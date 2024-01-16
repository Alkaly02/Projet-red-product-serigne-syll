import React from 'react'
import logo from '../assets/icons/logo.svg'
import SidebarComponent from './SidebarComponent';
import { menu } from './Utils';
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function SidebarComp() {
    return (
      <div className="vh-100 sidebar p-2">
        <div className="m-2 pb-5" id="logo">
          <img src={logo} alt="icon" />
          <span className="brand-name fs-5 fw-bold mx-2">RED PRODUCT</span>
        </div>
        <h6 className="mx-4 pt-5">Principal</h6>
        <div className="linkSidebar">
          {menu.map((elem, index) => (
            <SidebarComponent {...elem} key={index} />
          ))}
        </div>
        <div
          style={{ height: "50%" }}
          className="d-flex justify-content-center"
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={""}
            aria-haspopup="true"
            color="inherit"
            style={{ width: "50%", height: "20%", marginTop: "90%" }}
          >
            <AccountCircle style={{ fontSize: "5rem" }} />
          </IconButton>
        </div>
      </div>
    );
}

export default SidebarComp;