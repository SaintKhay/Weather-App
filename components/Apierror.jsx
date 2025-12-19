export default function ApiError() {
  return (
    <div className="api-error">
      <img
        className="err-icon"
        src="assets/images/icon-error.svg"
        alt="Error"
      />

      <p className="err-message">Something went wrong</p>
      <p className="err-msg">
        We could not connect to the server. Please try again in few moments!
      </p>

      <button className="retry-btn btn">
        <img
          className="retry-img"
          src="assets/images/icon-retry.svg"
          alt="Retry"
        />
        <p> Retry</p>
      </button>
    </div>
  );
}
