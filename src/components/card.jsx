import React from "react";
import "./card.css"
const Card =({img,fName,lName,id,sendId,option,sendClick})=>{
console.log(option);
const handelClick=()=>{
    sendId(id);
    sendClick(false);
}
if(option ==="lastName"){
    return <div className="card" onClick={handelClick}>
    <img src={img} alt="person img" width="100px" />
    <h1>{lName}</h1>
    </div>
}else if (option === "firstName"){
    return <div className="card" onClick={handelClick}>
    <img src={img} alt="person img" width="100px" />
    <h1>{fName}</h1>
    </div>
}return <div className="card" onClick={handelClick}>
    <img src={img} alt="person img" width="100px" />
    <h1>{fName}</h1>
    <h3>{lName}</h3>
    </div>
}
export default Card;