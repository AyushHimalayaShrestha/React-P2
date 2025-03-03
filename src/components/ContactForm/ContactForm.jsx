import React from 'react'
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
 const onSubmit =()=>{
  console.log(event);
 };
  
  
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}> 
          <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px'/>} />
          <Button
         
          text='VIA Call' icon={<FaPhoneAlt fontSize='24px'/>} />
          </div>
          <Button 
          isOutline={true}
          text='VIA EMAIL FORM' icon={<MdEmail fontSize='24px'/>} />

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'/>
            </div>
            <div className={styles.form_control}>
            <label htmlFor="Text">Text</label>
            <textarea  name='Text' rows='8'/>
            </div>
            <div style={{
              display:'flex',
              justifyContent:'end'
            }}>
            <button text='Submit'/>
            </div>  
          </form>

          

        </div>

        <div className={styles.contact_image}>
          <img src="/images/Frame 11.png" alt="contact" />
        </div>
    </section>
  )
}

export default ContactForm