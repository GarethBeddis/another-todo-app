import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sidebar extends Component {
  render() {
    const sidebarItemContents = [
      { label: 'All' },
      { label: 'Active' },
      { label: 'Completed' },
    ];

    const sidebarItems = sidebarItemContents.map(item => {
      return (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuItemLabel>{item.label}</SidebarMenuItemLabel>
        </SidebarMenuItem>
      );
    });
    return (
      <SidebarContainer>
        <SidebarMenu>{sidebarItems}</SidebarMenu>
      </SidebarContainer>
    );
  }
}
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 160px;
  border-right: 1px solid #e4e4e4;
  overflow: hidden;
  padding: 40px;
`;

const SidebarMenu = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;

const SidebarMenuItem = styled.li`
  height: 40px;
  width: 100%;
`;

const SidebarMenuItemLabel = styled.p``;
