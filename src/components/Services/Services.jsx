import React from 'react'
import "./ServicesStyle/Services.scss"
import data from '../data'
import { Carousel } from 'antd';

const Services = () => {

  const contentStyle = {
    height: '30px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };

  return (
    <div className='services'>
      <div className="container">
        <h2>Услуги</h2>
        <Carousel autoplay className="services-box carusel">
          {data.map(service => {
              return (
                <div className="services-item" key={service.id}>
                  <h2>{service.title} <br /> {service.titleCont}</h2>
                  <button className='services-button'>Подробнее</button>
                </div>
              )
            })}
        </Carousel>
        <div className="services-box ser-box">
          {
            data.map(service => {
              return (
                <div className="services-item" key={service.id}>
                  <h2>{service.title} <br /> {service.titleCont}</h2>
                  <button>Подробнее</button>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="service-shadow shadow"></div>
    </div>

  )
}

export default Services