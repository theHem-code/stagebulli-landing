import React from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_he8io06",
        e.target,
        "user_LkqF3nBSC3biR9i4iRxRm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

  return (
    <div className="container">
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" type="shown" name="user_name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control" type="email" name="user_email" />
        </div>
        <div className="form-group">
          <label>Nachricht</label>
          <textarea className="form-control" name="message" />
        </div>
        <input className="button_form" type="submit" value="Absenden" />
      </form>
    </div>
  );
}
