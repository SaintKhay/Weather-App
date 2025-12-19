export default function PrimaryHeader() {
  function getData(formData) {
    const userInput = formData.get("text");
    console.log(userInput);
  }

  return (
    <div className="heading">
      <p className="primary-heading">How's the sky looking today?</p>
      <form action={getData} className="search-box">
        <input
          type="text"
          id="searchInput"
          name="text"
          placeholder="Search for a place..."
        />
        <button className="btn search-btn">Search</button>

        <div className="search-dropdown"></div>
      </form>
    </div>
  );
}
