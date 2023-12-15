import React, { useState } from 'react'
import './userdata.css'
// import './userlogin.css'
import { Link } from 'react-router-dom';
// import { BASE_URL } from '../../helpers/backedurl';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Jwt } from 'jsonwebtoken';




const UserData = (props) => {
    const secKey = 'adfjdsfsdjkjkdkdjf'
    // const navigation = useNavigate()

    const [loginSection, setLoginSection] = useState(false);
    const [regisSection, setRegisSection] = useState(true);

    const [genVal, setGenVal] = useState("")
    const [imagePic, setImage] = useState("");
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    const [user, setUser] = useState({
        name: "",
        userName: "",
        date: "",
        password: "",
        address: "",
        imagePic:"",
        mobileNumber: "",
        addressH: "",
        gender:""
    });

    // regis login section handler
    const loginCompHandler = () => {
        setLoginSection(true);
        setRegisSection(false)
    }
    const registCompHandler = () => {
        setRegisSection(true);
        setLoginSection(false);
    }

    const onChangeHandler = e => {
        // console.log(e.target);

        const { name, value } = e.target;
        setUser({ ...user, [name]: value})
       

        setUserLogin({ ...userLogin, [name]: value })
    }

  


    const userRegisterHandler = (e) => {
        e.preventDefault();

          
       let genderValue = document.getElementsByName('gender')
       console.log(genderValue)
       for(let i=0;i<genderValue.length;i++){
        if(genderValue[i].checked) console.log(genderValue[i].value)
          
        
       }

    //    console.log(genVal)
       props.onSubmit(user,imagePic,genVal);
        // console.log(formData);
        // console.log(user);
        setUser({
            name: "",
            userName: "",
            date: "",
            password: "",
            address: "",
            imagePic:"",
            mobileNumber: "",
            addressH: "",
            gender:""
        });

        console.log(imagePic)

        // setImage(null);
    }


    

    return (
        <>

            <div className="main_body">

                <div className="regis_class">
                    <div className={regisSection ? "main_container" : "active"}>
                        <div className="title">
                            <button className='login_btn1' onClick={loginCompHandler}>User Login</button>
                            <button className='reg_btn ' onClick={registCompHandler}>User Registration</button>
                        </div>
                        <div className="content">
                            <form action="#" encType="multipart/form-data">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">English Name</span>
                                        <input type="text" name='name' placeholder="Enter your name" value={user.name} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Hindi Name</span>
                                        <input type="text" name='userName' placeholder="Enter your username" value={user.userName} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">DOB</span>
                                        <input type="date" name='date' placeholder="Enter your DOB" value={user.date} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Aadhar Number</span>
                                        <input type="text" name='mobileNumber' placeholder="Enter your number" value={user.mobileNumber} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Password</span>
                                        <input type="text" name='password' placeholder="Enter your password" value={user.password} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Profile Image</span>
                                        <input type="file" name='profileImg' id='profile_img' placeholder="" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Address English</span>
                                        <textarea name="address" id="" cols="30" rows="10" value={user.address} onChange={onChangeHandler} required></textarea>
                                        {/* <input type="text" name='address' placeholder="Confirm your password" value={user.address} onChange={onChangeHandler} required /> */}
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Address Hindi</span>
                                        {/* <input type="text" name='addressH' placeholder="Enter Communication Address" value={user.addressH} onChange={onChangeHandler} required /> */}
                                        <textarea name="addressH" id="" cols="30" rows="10" value={user.addressH} onChange={onChangeHandler} required></textarea>
                                    </div>
                                    
                                </div>
                                <div className="gender-details">
                                    <input type="radio" name="gender" id="dot-1" defaultValue={"पुरुष/Male"} onChange={(e)=>setGenVal(e.target.value)}/>
                                    <input type="radio" name="gender" id="dot-2" defaultValue={"स्त्री/Female"} onChange={(e)=>setGenVal(e.target.value)}/>
                                    <input type="radio" name="gender" id="dot-3" defaultValue={"अन्य/Other"} onChange={(e)=>setGenVal(e.target.value)}/>
                                    <span className="gender-title">Gender</span>
                                    <div className="category">
                                        <label htmlFor="dot-1">
                                            <span className="dot one"></span>
                                            <span className="gender">Male</span>
                                        </label>
                                        <label htmlFor="dot-2">
                                            <span className="dot two"></span>
                                            <span className="gender">Female</span>
                                        </label>
                                        <label htmlFor="dot-3">
                                            <span className="dot three"></span>
                                            <span className="gender">Third gender</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="button">
                                    <input type="submit" onClick={userRegisterHandler} value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


              

            

            </div>
        </>
    )
}

export default UserData