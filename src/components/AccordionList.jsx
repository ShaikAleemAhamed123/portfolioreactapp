import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import axios from "axios";
import Loader from "./Loader";

function AccordionList() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://portfolioreactapp-backend.onrender.com/messages")
            .then((res) => {
                console.log(res);
                setMessages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return <div className="container mt-5 accordion" id="accordionFlushExample">
        {loading && <Loader />}
        {messages.map((item, index) => {
            return <Accordion key={index} name={item.name} email={item.email} message={item.message} />
        })}

    </div>

}

export default AccordionList;

