import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.scss'
import { Icon } from 'antd'

export const NavBar = () => {

    return (
        <nav className="bottom-nav">
            <div className="bottom-nav__item">
                <NavLink to="/p/home" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active" >
                    <Icon type="home"  />
                    <span>Trang chủ</span>
                </NavLink>
            </div>
            <div className="bottom-nav__item">
                <NavLink to="/p/active" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active">
                    <Icon type="unordered-list" />
                    <span>Hoạt dộng</span>
                </NavLink>
            </div>
            <div className="bottom-nav__item">
                <NavLink to="/p/notification" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active">
                    <Icon type="notification"  />
                    <span>Thông báo</span>
                </NavLink>
            </div>
            <div className="bottom-nav__item">
                <NavLink to="/p/user" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active">
                    <Icon type="user" />
                    <span>Tài khoản</span>
                </NavLink>
            </div>
        </nav>
    )
}