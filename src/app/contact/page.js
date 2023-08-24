import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from "./contact.module.css";
import ContactForm from '../components/ContactForm';
const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.998341193601!2d76.38337237751983!3d27.99394715098333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912ab350b1661cf%3A0x3a7316188a19f5ee!2sNeemrana%20Fort-Palace!5e0!3m2!1sen!2sin!4v1692861452448!5m2!1sen!2sin" width={1900} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};
export default Contact;