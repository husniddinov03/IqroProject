import React, { useState } from 'react'
import './TermStyle/Term.scss'
import { Modal } from 'antd';
import axios from 'axios';
import sendActiveTrue from './TermStyle/Success.png'

const Term = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(null)
    
    const [formDataResp, setFormDataResp] = useState(null)

    const [termItem, setTermItem] = useState(false)
    const [termItemOrg, setTermItemOrg] = useState(true)


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const termItemResp = () => {
        setTermItem(true)
    }
    

    const termItemSendFunc = () => {
        setTimeout(() => {
            setFormDataResp(null)
            setTermItem(false)
        }, 5000);
    }

    const serverUrl = ""
    const API = axios.create({ baseURL: serverUrl });

    const resFunc = (data) => {
        return API.post("/user/{part}", data)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newForm = new FormData(e.target)
        const formValues = Object.fromEntries(newForm.entries());


        if (!formData) {
            setFormData(formValues);
          } else {
            setFormDataResp(formValues);
          }

          console.log("formValues", formValues);
          console.log("formData", formData);
          console.log("formDataResp", formDataResp);
        // if you want to send a request to any url, open the comments below, add the url above and change the part that should go to.

        // try {
        //     const newForm = new FormData(e.target)
        //     const formValues = Object.fromEntries(newForm.entries());
        //     await resFunc(formValues)
        //     setFormData(formValues)
        //     toast.loading("please wait")
        //     toast.dismiss()
        // } catch (error) {
        //     toast.error("Something went wrong")
        // }

        // // resFunc(formValues)
        // console.log(formData);

    }

    return (
        <div className='term' style={termItem ? { paddingBottom: "450px" } : { paddingBottom: "30px" }}>
            <div className="term-box container">
                <div className="term-item-1 ">
                    <h2>Сколько стоят услуги</h2>
                    <p>Цена рассчитывается индивидуально
                        в зависимости отсложности, объема
                        и сроков работы.
                        <br /><br />
                        Разработчик оценивает временные затраты
                        по проекту, а аналитики устанавливают
                        стоимость продукта.</p>
                </div>

                <div className="term-item-2 flex">
                    {!formDataResp ?
                        <form action='' onSubmit={handleSubmit}>
                            <h2>Получить  <br />
                                бесплатную <br />
                                консультацию </h2>
                            <p>В рамках консультации уточним необходимую информацию  <br />
                                для анализа вашего проекта</p>
                            {termItem ?
                                <div className='term-item-2-inputs flex' onSubmit={handleSubmit}>
                                    <input required type="text" name="name" placeholder='Ваше имя' />
                                    <input required type="number" name="number" placeholder='номер телефона' />
                                    <input required type="text" name="service" placeholder='какая из услуг вас заинтересовала ' />
                                    <button style={formDataResp ? { color: "#219653" } : { color: "#2E2E2E" }} onClick={termItemSendFunc}>отправить</button>
                                </div> : <></>}
                        </form> :
                        <>
                            <div style={ { display: "flex", justifyContent: "center" }} className='sendActive'>
                                <img src={sendActiveTrue} alt="No image" />
                                <h2>Cпасибо
                                    за вашу заявку!</h2>
                                <p>Наш менеджер свяжется с вами
                                    в течении 3-ех часов</p>
                            </div>
                        </>}
                    {termItem ? <button className='term-modal-btn' onClick={showModal}>Получить</button> : <></>}
                    {/* {formDataResp ? <button style={{ color: "#219653", padding: "40px 0", marginTop: "40px" }} onClick={ termItemSendFunc}>отправить</button> : <></>} */}
                    <button className='term-modal-btn' onClick={showModal}>Получить</button>
                    {!termItem ? <button className='term-resp-btn' onClick={()=> termItemResp()}>Получить</button> : <></>}
                </div>

                <Modal className='term-modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <form action="" className='term-form' onSubmit={handleSubmit}>
                        {!formData ? (
                            <div className="form-box">
                                <input required className='term-input' type="text" name="name" placeholder='Ваше имя' />
                                <input required className='term-input' type="number" name="number" placeholder='номер телефона' />
                            </div>
                        ) :
                            <div className='sendActive'>
                                <img src={sendActiveTrue} alt="No image" />
                                <h2>Cпасибо
                                    за вашу заявку!</h2>
                                <p>Наш менеджер cкоро
                                    свяжется с вами</p>
                            </div>}
                        <button style={formData ? { color: "#219653" } : { color: "#2E2E2E" }} onClick={()=> setFormData(true)} className='term-modal-btn'>Отправить</button>
                    </form>
                </Modal>
            </div>

            <div className="term-shadow shadow">

            </div>
        </div>
    )
}

export default Term