/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                    <span className="menu-text">Dashboard</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/products')}`}>
                <NavLink className="menu-link" to="/products">
                    <span className="menu-text">Product</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/crm')}`}>
                <NavLink className="menu-link menu-toggle" to="/crm">
                    <span className="menu-text">Custom</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">

                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/crm')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/crm">
                                <span className="menu-text">
                                    Crm
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">

                                    <li className={`menu-item ${getMenuItemActive('/crm/users')}`}>
                                        <NavLink className="menu-link" to="/crm/users">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Users</span>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>
            </li>
        </ul>
    </div>;
}
