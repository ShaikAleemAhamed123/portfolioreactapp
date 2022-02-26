import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

function AccordionList() {

    const[messages,setMessages]=useState([]);

    const messageList=async()=>{
        try{
            const response=await fetch("https://fierce-sands-89394.herokuapp.com/messages");
            setMessages(await response.json());
        }
        catch(err){
            console.log(err);
        }
         
    }

    useEffect(()=>{
        messageList();
    },[]);


    return <div className="container mt-5 accordion" id="accordionFlushExample">
    <h1 className="container text-center text-light">Messages</h1>
        {messages.map((item, index) => {
            return <Accordion key={index} name={item.name} email={item.email} message={item.message} />
        })}

    </div>

}

export default AccordionList;

