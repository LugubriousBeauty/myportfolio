import React from "react";
import './contact.css'
import {ImWhatsapp} from 'react-icons/im'
import {BsEnvelope} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zwtk4pb', 'template_1gffz97', form.current, 'omTr6oUeKWJvXCiOb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <BsEnvelope className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>lucividal09@gmail.com</h5>
                        <a href="mailto:lucividal09@gmail.com">Send Email</a>
                    </article>
                    <article className="contact_option">
                        <ImWhatsapp className="contact_option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+54 342 6393417</h5>
                        <a href="wa.me/543426393417">Send Message</a>
                    </article>
                    <article className="contact_option">
                        <BsLinkedin className="contact_option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>Lucía Vidal</h5>
                        <a href="https://www.linkedin.com/in/lucía-vidal-84235a134/">See profile</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message"rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact