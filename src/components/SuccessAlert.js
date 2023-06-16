function SuccessAlert() {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Hiiiiiiiii!</strong> Votre demande a bien été envoyé
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
export default SuccessAlert;
