import React from 'react'
import "./DigitalStyle/Digital.scss"
import data from "./data"
import trueIcon from "./DigitalImg/trueIcon.png"
import falseIcon from './DigitalImg/falseIcon.png'

const Digital = () => {
    return (
        <div className='digital container'>
            <h2><span>Что даст вашему бизнесу </span><br />
                внедрение Digital-инструментов</h2>
            <div className="digital-box">

                {data.map(text => {
                    return (
                        <div className="digital-item" key={text.id}>
                            <img src={text.active == true ? trueIcon : falseIcon} alt="no image" />
                            <p>{text.title}</p>
                        </div>
                    )
                })}
            </div>

            <div className="digital-shadow shadow">
                
            </div>
        </div>
    )
}

export default Digital