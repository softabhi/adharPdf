import React, { useContext, useEffect, useState } from 'react'
import './adhar.css'
import ad from './images/ad.JPG'
import ad1 from './images/ad1.JPG'
import ad2 from './images/ad2.JPG'
import ad3 from './images/ad3.JPG'
import ad4 from './images/ad4.JPG'
import ad5 from './images/ad5.JPG'
import pic from './images/pic.jpg'
import ad6 from './images/ad6.JPG'
import AD99 from './images/AD99.png'
import { globalData } from './App'

const Aadhar = (inputData) => {
    const [qr, setQr] = useState();
    const { imageData,userGen } = useContext(globalData);
    const { name, userName, address, addressH, date, mobileNumber } = inputData;


    //   console.log(imageData);

    useEffect(() => {
        setQr(` http://api.qrserver.com/v1/create-qr-code/?data=${inputData}&size=150x150`)
    }, [inputData])

    return (
        <>
            <div className='main'>
                <div>
                    <img src={ad1} style={{ "width": "3rem", "marginLeft": "10px" }} alt="" />
                    <img src={ad} style={{ "width": "23rem", "marginLeft": "15px" }} alt="" />
                    <img src={ad2} style={{ "width": "6rem", "marginLeft": "10px" }} alt="" />
                    <img src={ad1} style={{ "width": "3rem", "marginLeft": "40px" }} alt="" />
                    <img src={ad4} style={{ "width": "23rem", "marginLeft": "15px" }} alt="" />
                    <img src={ad3} style={{ "width": "6rem", "marginLeft": "10px" }} alt="" />
                </div>
                <div className='middle_sec'>
                    <div>
                        <img src={imageData} id='person_img' alt="" />
                    </div>
                    <div className='name_sec'>
                        <h5>{name}</h5>
                        <h5>{userName}</h5>
                        <h5><span>जन्म तिथि/DOB:</span>{date}</h5>
                        <p>{userGen}</p>
                        <img src={AD99} alt="" className='notice'/>
                    </div>
                   
                    <div className='address'>
                        <div className="add_hindi">
                            <h5>पता:</h5>
                            <h5><span>आत्मज:</span>{addressH}<br />

                            </h5>
                        </div> 

                        <div className="add_eng">
                            <h5>Address:</h5>
                            <h5><span>S/O:</span>{address}<br />

                            </h5>
                        </div>

                    </div>

                    <div className='qr_code'>
                        <img src={qr} alt="img" />
                    </div>

                </div>
                <div className='addar_no'>
                    <h4>{mobileNumber}</h4>
                    <h4>{mobileNumber}</h4>
                </div>
                <div className='footer_img'>
                    <img src={ad5} alt="" className='bottom_title' />
                    <img src={ad6} alt="" id='bottom_title_right' />
                </div>
            </div>
        </>
    )
}

export default Aadhar
