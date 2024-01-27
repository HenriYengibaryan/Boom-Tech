import { createContext, useState } from "react";
import SongsList from "./components/SongList/SongsList";
export const Songs = createContext();
export const { Search, SetSearch } = createContext();
export const SetSongs = createContext();
function App() {
  const [songs, setSongs] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
  });

  return (
    <div>
      <Songs.Provider value={{ songs, setSongs, setFilter, filter }}>
        <SongsList />
      </Songs.Provider>
    </div>
  );
}

export default App;
