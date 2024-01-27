import { useContext } from "react";
import { Songs } from "../../App";
import "./style.css";

function SearchFilter() {
  const { setSongs, setFilter, filter } = useContext(Songs);

  function reverseSongs() {
    setSongs((songs) => {
      return [...songs].reverse();
    });
  }

  function handleSearchChange(e) {
    setFilter((filter) => ({
      ...filter,
      search: e.target.value,
    }));
  }

  return (
    <div className="searchFilter">
      <button className="handleTruckButton" onClick={reverseSongs}>
        <svg
          className="sortIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          width="18px"
          height="18px"
          viewBox="0 0 256 256"
          id="Flat"
        >
          <path d="M119.39062,172.93848a8.00028,8.00028,0,0,1-1.73339,8.71875l-32,32a8.00181,8.00181,0,0,1-11.31446,0l-32-32A8.00065,8.00065,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39062,172.93848Zm94.26661-98.59571-32-32a8.00122,8.00122,0,0,0-11.31446,0l-32,32A8.00065,8.00065,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8.00066,8.00066,0,0,0,5.65723-13.65723Z" />
        </svg>
        Track Nu...
      </button>
      <div className="searchBar">
        <input
          onChange={handleSearchChange}
          value={filter.search}
          className="searchInput"
          type="text"
          placeholder="Filter"
        ></input>
        <svg
          className="searchIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
export default SearchFilter;
