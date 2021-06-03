import React from "react";

const Select=({handelOption})=>{
    const handelSelect=(event)=>{
        handelOption(event.target.value);
    }
    return <div>
        <select  onClick={handelSelect}>
            <option value="noValue" >None</option>
            <option value="firstName">First Name</option>
            <option value ="lastName">Last Name</option>
        </select>
    </div>
}
export default Select;