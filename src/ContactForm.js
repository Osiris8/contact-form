import "./index.css";
import Alert from "./Alert";
function ContactForm() {
  return (
    <div className="margin-small">
      <Alert />
      <div className="card padding-small border-color">
        <div class="mb-3">
          <label for="exampleFormControlInput0" class="form-label">
            Votre nom et prénom
          </label>
          <input
            type="text"
            class="form-control border-color"
            id="exampleFormControlInput0"
            placeholder="John Doe"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Adresse Email
          </label>
          <input
            type="email"
            class="form-control border-color"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control border-color"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3 flex justify-content-end">
          <button type="button" class="btn btn-dark btn-lg">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
