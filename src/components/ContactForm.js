import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";
import SuccessAlert from "./SuccessAlert";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="margin-small">
      {form ? "" : <SuccessAlert />}
      <div className="errorFrom"></div>
      <div className="card padding-small border-color">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput0" className="form-label">
              Votre nom et prénom
            </label>
            <input
              type="text"
              className="form-control border-color"
              id="exampleFormControlInput0"
              placeholder="John Doe"
              name="name"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Adresse Email
            </label>
            <input
              type="email"
              className="form-control border-color"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control border-color"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
            ></textarea>
          </div>
          <div className="mb-3 flex justify-content-end">
            <button type="submit" className="btn btn-dark btn-lg">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
