import React from 'react'
import "./FooterStyle/Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <Link className='link'>Услуги</Link>
            <Link className='link' style={{ marginLeft: "28px" }}>Как мы работаем</Link>
            <Link className='link'>Результат</Link>
            <Link className='link'>Заказать</Link>

            <div className="footer-shadow fot-shad-1"></div>
            <div className="footer-shadow fot-shad-2"></div>
        </footer>
    )
}

export default Footer