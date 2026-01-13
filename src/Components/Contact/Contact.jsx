import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'




const Contact = () => {

    const [result, setResult] = useState("");

const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    event.target.reset();
    const formData = new FormData(event.target);
    formData.append("access_key", "f07d4a0e-6d6d-4ae5-adb8-39175515c92b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
 <h3>Send Us a Message<img src={msg_icon} alt=''/></h3>
 <p>Feel free to reach out through contact form or find our contact information below.
  your feeedback ,questions and suggestions are importan to us as we strive to provide service to our university community. </p>
    <ul>
      <li><img src={mail_icon} alt=''/>contact@hello.dev</li>
        <li><img src={phone_icon} alt=''/>+5 237-869-544</li>
          <li><img src={location_icon} alt=''/>77 Massachsetts Ave,Cambridge<br/>NA 02139,United States</li>
    </ul>
    
      </div>
      <div className="contact-col">
<form onSubmit={onSubmit}>
   <label>Your Name</label>
   <input type='text' name='name' placeholder='Enter your name' required/>
<label>Your Phone</label>
<input type='tel' name='phone' placeholder='Enter your Mobile number' required/>
<label>Write your message here</label>
<textarea name='message' rows="6" placeholder='Enter your name' required></textarea>
<button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=''/></button>

</form>
<span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
