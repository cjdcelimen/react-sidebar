import React from 'react'
import { FaOtter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #5a5e7c;
        border-left: 4px solid #4259Fa;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const SubMenu = ({ item }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default SubMenu
