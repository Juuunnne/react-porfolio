import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            About me
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            Projects
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/edit">Edit</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
