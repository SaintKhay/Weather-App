import loadIcon from "../assets/images/icon-loading.svg";

export default function Loading() {
  return (
    <>
      <div className="loading-container">
        <img className="load-icon" src={loadIcon} alt="icon-loader" />
        <p className="load-text">Loading...</p>
      </div>
    </>
  );
}
