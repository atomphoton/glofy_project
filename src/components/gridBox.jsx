import React from "react"
import Card from "./card";
import Select from "./Select";
import Detail from "./detail";

import "./gridBox.css";
const GridBox=({info})=>{
    const [selectedId, setSelectedId]=React.useState()
    const[selectedOption,setSelectedOption]=React.useState("novalue")
    const [style,updateStyle]=React.useState(true);
    const getId=(id)=>{
        setSelectedId(id);
    }
const handelSelectedOption=(e)=>{
  setSelectedOption(e);
 
}
const updateClick=(e)=>{
    updateStyle(e)
    
}
const click=(e)=>{
    updateStyle(e)
}
 
    return<>{(style) ? 
    <div className="d" id="box" >
    <header>USERS</header>
    <div className="select"><Select handelOption={handelSelectedOption} /></div>
    <div className="da">
    {info.map(item=> <Card img={item.avatar} fName={item.first_name} lName={item.last_name} key={item.id} id={item.id} sendId={getId} option={selectedOption} sendClick={click} />)}
    </div>
    </div>:
    (selectedId) ? <Detail  id={selectedId} click={updateClick} />:null
    
}</>
}
export default GridBox;

