import contactImage from '../source/contactus.jpg';

function Contact() {
  //Contact 
  return (
    <section className="contact" id="contact">
      <div className="col-md-4 mb-3 contact-left">
        <div className="contact-box">
          <h2 className="contact-h">Contact Us</h2>

          <label htmlFor="email" className="email"></label>
          <input type="email" className="email" placeholder="Your email" />

          <label htmlFor="message" className="message"></label>
          <textarea name="message" id="message" cols="25" rows="3">Enter your Message</textarea>
          <button className="submit">Submit</button>
        </div>
      </div>
      <div className="col-md-4 mb-3 con-img">
        <img src={contactImage} alt="contact " className="contact-img" />
      </div>
    </section>
  );
}

export default Contact;
