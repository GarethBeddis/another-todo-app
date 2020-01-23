import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sidebar extends Component {
  render() {
    // Todo: map sidebar items (inbox, today, active, completed)
    return (
      <SidebarContainer>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuItemLabel>All</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuItemLabel>Active</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuItemLabel>Completed</SidebarMenuItemLabel>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>
    );
  }
}
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 160px;
  border-right: 1px solid #222;
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
