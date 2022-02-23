import React,{useState} from "react";

function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[message,setMessage]=useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Message Sent succesfully");
            setEmail("");
            setName("");
            setMessage("");
        }
    }

      
//<htmlForm action="">
//     <input type="text" placeholder="name" 
//     value={name} onChange={(e) => setName(e.target.value)} />
//     <input type="email" placeholder="email" 
//     value={email} onChange={(e) => setEmail(e.target.value)} />
//     <button type="submit" 
//     onClick={handleOnSubmit}>submit</button>
// </htmlForm>



return <form className="contact-form">
    <div>
        <p htmlFor="contact-name" className="contact-label me-4">Name</p>
        <input type="text" className="name-field contact-input" placeholder="Enter your Name"
           value={name} onChange={(e) => setName(e.target.value)}  required/>
    </div>
    <div>
        <p htmlFor="contact-name" className="contact-label me-4">Email</p>
        <input type="email" className="email-field contact-input" placeholder="Enter your Email"
           value={email} onChange={(e) => setEmail(e.target.value)} required/>
    </div>
    <div>
        <p htmlFor="contact-name" className="contact-label me-4">Message</p>
        <textarea className="text-area contact-input" rows="5" cols="60" placeholder="Enter Message here" 
        value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
    </div>
    <div><button className="submit-button btn my-4" type="submit" onClick={handleOnSubmit} value="submit">Submit</button></div>
</form>
}

export default Contact;