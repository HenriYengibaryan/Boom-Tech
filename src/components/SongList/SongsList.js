import React, { useContext } from "react";
import "./style.css";
import SongRow from "../SongRow/SongRow";
import FormTable from "../FormTable/FormTable";
import PlayAdd from "../PlayAdd/PlayAdd";
import SearchFilter from "../SearchFilter/SearchFilter";
import { Songs } from "../../App";

function SongsList() {
  const { songs, setSongs, filter } = useContext(Songs);
  const removeSong = (id) => {
    setSongs(
      songs.filter((el) => {
        return el.id !== id;
      })
    );
  };
  const songsToRender = filter.search
    ? songs.filter((song) =>
        song.songName.toLowerCase().includes(filter.search.toLowerCase())
      )
    : songs;

  return (
    <div className="globalWindow">
      <div>
        <div className="header">
          <div className="leftPart">
            <PlayAdd />
          </div>
          <div className="rightPart">
            <SearchFilter />
          </div>
        </div>
        <table className="songList">
          <FormTable />
          {songsToRender.map((el) => (
            <SongRow song={el} key={el.id} removeSong={removeSong} />
          ))}
        </table>
      </div>
    </div>
  );
}
export default SongsList;
