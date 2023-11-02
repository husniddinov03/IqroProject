import React, { useState } from 'react'
import "./NavbarStyle/Navbar.scss"
import siteLogo from "../assets/Img/SiteLogIqro.png"
import { Link } from 'react-router-dom'
import { Button, Drawer } from 'antd';
import callIcon from './NavIcons/phone-outgoing.png'
import openDrawer from './NavIcons/nav-button-icon.png'
import closeDrawer from './NavIcons/ic16-menu.png'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-box">
                    <Link className="nav-logo">
                        <img src={siteLogo} alt="No image" />
                    </Link>

                    <Button className='nav-button open-button' onClick={showDrawer}>
                        <img src={openDrawer} alt="No Icon" />
                    </Button>

                    <Drawer className='nav-drawer' placement="right" onClose={onClose} open={open}>
                        <div className="drawer-box">
                            <Button className='nav-button close-button flex ' onClick={onClose}>
                                <img src={closeDrawer} alt="No Icon" />
                            </Button>
                            <Link className='drawer-link'>Услуги</Link>
                            <Link className='drawer-link'>Как мы работаем</Link>
                            <Link className='drawer-link'>Результат</Link>
                            <Link className='drawer-link'>Заказать</Link>

                            <div className="nav-call">
                                <button><img src={callIcon} alt="" /></button>
                                <p>Позвонить</p>
                            </div>
                        </div>
                    </Drawer>

                    <div className="nav-menu">
                        <Link className='link'>Услуги</Link>
                        <Link className='link' style={{ marginLeft: "28px" }}>Как мы работаем</Link>
                        <Link className='link'>Результат</Link>
                        <Link className='link'>Заказать</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar