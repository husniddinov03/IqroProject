import React from 'react'
import "./JobStyle/Job.scss"
import data from "./data"
const Job = () => {
    return (
        <div className='job '>
            <h2>Как мы работаем </h2>

            <div className="job-box">

                {data?.map(text => {
                    return (
                        <div className="job-item" key={text.id}>
                            <img src={text.img} alt="No image" />
                            <p>{text.title}</p>
                        </div>
                    )
                })
                }

            </div>

            <div className="job-shadow shadow"></div>
        </div>

    )
}

export default Job