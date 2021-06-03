import React, { useEffect } from "react";
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridBox from "./gridBox";
const User=()=>{
const [data, setData]=React.useState();


const getData= async()=>{
 const recivedRequest=await axios.get (`https://reqres.in/api/users?delay=3`)
 
 setData(recivedRequest["data"].data)
}
 useEffect(()=>{
 getData();
 
 },[]);

console.log(data);
return <div className= "box">


{(data)?<GridBox info= {data} /> : <div className="loading"><h1>Loading</h1><Spinner animation="border" /></div>}

</div>
}
export default User;
