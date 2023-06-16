function DangerAlert() {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Hi, tadaaaaamz !</strong> Veuillez vérifier les informations que
      vous avez saisies
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
export default DangerAlert;
