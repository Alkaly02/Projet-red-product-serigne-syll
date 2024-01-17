import React from "react";
import logo from "../assets/icons/logo.svg";
import SidebarComponent from "./SidebarComponent";
import { menu } from "./Utils";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

function SidebarComp() {
  return (
    <div className="vh-100 sidebar py-2">
      <div className="m-2 pb-2 ps-1" id="logo">
        <img src={logo} alt="icon" />
        <span className="brand-name fs-5 fw-bold mx-2">RED PRODUCT</span>
      </div>
      <h6 className="mx-3">Principal</h6>
      <div className="linkSidebar">
        {menu.map((elem, index) => (
          <SidebarComponent {...elem} key={index} />
        ))}
      </div>
      <div style={{ height: "50%" }} className="d-flex justify-content-center ">
        <div
          className="d-flex align-items-center contentOnline pt-5"
          style={{ width: "100%", height: "20%", marginTop: "90%" }}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={""}
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle style={{ fontSize: "4rem" }} />
          </IconButton>

          <div className="mx-3">
            <p style={{ fontWeight: "600" }} className="p-0 m-0">
              Mouhamet Badiane
            </p>
            <div className="d-flex align-items-center">
              <p className="rounded-circle onlineBtn me-2"></p>
              <p>en ligne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComp;
