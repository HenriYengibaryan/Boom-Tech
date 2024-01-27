import "./style.css";

function PlayAllButton() {
  return (
    <div className="playAllContainer">
      <button className="playAllButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12px"
          color="#777777"
          height="12px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z"
            fill="#000000"
          />
        </svg>
        Play All
      </button>
      <div>
        <svg
          className="arrowDownIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          width="15px"
          height="15px"
          viewBox="0 0 32 32"
          version="1.1"
        >
          <title>down</title>
          <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z" />
        </svg>
      </div>
    </div>
  );
}
export default PlayAllButton;
