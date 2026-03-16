import "./contact.css";

function Contact() {
  return (
    <section className="contact">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2>Send us a message ✉️</h2>

        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us.
        </p>

        <div className="contact-info">
          <p>contact Email: harishchoisdiestti@gmail.com</p>
          <p>📞 7013533249</p>
          <p>📍 rushikonda, vizag</p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form
        className="contact-right"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        {/* WEB3FORMS REQUIRED */}
        <input
          type="hidden"
          name="access_key"
          value="42bda0cb-debb-41ea-aaf4-ca14683ab278"
        />
        <input
          type="hidden"
          name="subject"
          value="New Contact Form Message"
        />
        <input type="hidden" name="from_name" value="University Website" />

        <label>Your name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your mobile number"
          required
        />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email id"
          required
        />

        <label>Write your message here</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          required
        ></textarea>

        {/* ANTI-SPAM (Web3Forms) */}
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

        <button type="submit">Submit now →</button>
      </form>
    </section>
  );
}

export default Contact;
