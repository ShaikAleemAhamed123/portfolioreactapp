import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import axios from "axios";

function AccordionList() {

    const[messages,setMessages]=useState([]);

    useEffect(()=>{
     axios.get("https://fierce-sands-89394.herokuapp.com/messages")
        .then((res)=>{
            console.log(res);
            setMessages(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);


    return <div className="container mt-5 accordion" id="accordionFlushExample">
    <h1 className="container text-center text-light">Messages</h1>
        {messages.map((item, index) => {
            return <Accordion key={index} name={item.name} email={item.email} message={item.message} />
        })}

    </div>

}

export default AccordionList;

