import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("sent");
    async function handleOnSubmit(e) {
        setStatus("sending");
        e.preventDefault();
        const postData = {
            name: name,
            email: email,
            message: message
        };
        try {
            const res = await axios
                .post("https://portfolioreactapp-backend.onrender.com/messages", postData)
                .then((response) => {
                    console.log(response);
                });

            setName("");
            setEmail("");
            setMessage("");
            setStatus("sent");
            alert("Message Sent Successfully !")

        }
        catch (err) {
            alert("Something Went Wrong while posting Message. Error : " + err)
            console.log("What the hell " + err);
        }

        // let result = await fetch(
        // 'https://fierce-sands-89394.herokuapp.com/register', {
        //     method: "post",
        //     body: JSON.stringify({ name, email, message }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // result = await result.json();
        // console.warn(result);
        // if (result) {
        //     alert("Message Sent succesfully");
        //     setEmail("");
        //     setName("");
        //     setMessage("");
        // }
    }


    return <form className="contact-form">
        <div>
            <p htmlFor="contact-name" className="contact-label me-4">Name</p>
            <input type="text" className="name-field contact-input" placeholder="Enter your Name"
                value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
            <p htmlFor="contact-name" className="contact-label me-4">Email</p>
            <input type="email" className="email-field contact-input" placeholder="Enter your Email"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
            <p htmlFor="contact-name" className="contact-label me-4">Message</p>
            <textarea className="text-area contact-input" rows="5" cols="60" placeholder="Enter Message here"
                value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
        </div>
        <div><button className="submit-button btn my-4" type="submit" onClick={handleOnSubmit} value="submit">{
            status === "sent" ? "Submit" : "Sending..."
        }</button></div>
    </form>
}

export default Contact;