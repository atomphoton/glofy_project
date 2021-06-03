import React, { useEffect } from "react"
import axios from "axios";
import {Button} from "react-bootstrap";
import "./detail.css";
const Detail=({id,click})=>{
    const [userData, setUserData]=React.useState();
    
    const getId= async()=>{
        const data=await axios.get(`https://reqres.in/api/users/${id}`) 
        setUserData(data.data.data);
    }
    useEffect(()=>{
        getId();
    },[id])
    const handelClick=(e)=>{
        click(true)
       
    }

    return<div className="detail"> 
    <div className="detail-box">
    { (userData)&&<>
        <h1>{userData["first_name"]} {userData["last_name"]}</h1>
        <img src={userData.avatar} alt={userData.first_name} profile image />
        <p>{userData.email}</p>  
        <Button variant="outline-secondary" onClick={handelClick}>Back</Button>   
        </>}
    </div>

    </div>
}
export default Detail;