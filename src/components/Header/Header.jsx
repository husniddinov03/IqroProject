import React from 'react'
import "./HeaderStyle/Header.scss"
import Navbar from '../Navbar/Navbar'
import mobileImg1 from '../assets/Img/IqroMobile1.png'
import mobileImg2 from '../assets/Img/IqroMobile2.png'


const Header = () => {
    return (
        <header>
            <Navbar />

            <div className="header-box container" >
                <div className="header-item">
                    <h1>Разаработка сайтов 
                        и мобильных приложений</h1>
                    <p>Помогаем бизнесу увеличить прибыль <br/>
                        <span>с помощью digital-инструментов</span></p>
                    <button className='header-button hb1'>Обсудить проект</button>
                </div>

                <div className="header-item head-item-2">
                    <img className='header-img-1' style={{position: "relative", zIndex: "2"}} src={mobileImg1} alt="No image" />
                    <img className='header-img-2' src={mobileImg2} alt="No image" />
                </div><br />
                <button className='header-button hb2'>Обсудить проект</button>

                <div className="header-shadow1 shadow"></div>
                <div className="header-shadow2 shadow"></div>
            </div>
        </header>
    )
}

export default Header