import { useContext, useState } from "react";
import { Songs } from "../../App";
import "./style.css";

let id = 0;
export default function MusicUploadForm({ setModalOpen }) {
  const { songs, setSongs } = useContext(Songs);

  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [errors, setErrors] = useState({
    songName: false,
    artistName: false,
    file: false,
  });
  const [isUploaded, setIsUploaded] = useState(false);
  const handleSongNameChange = (e) => {
    setSongName(e.target.value);
  };
  const handleArtistNameChange = (e) => {
    setArtistName(e.target.value);
  };
  const addSong = () => {
    if (artistName == "" || songName.length < 3 || !uploadFile) {
      setErrors({
        songName: !(songName.length > 2),
        artistName: !(artistName.length > 2),
        file: !uploadFile,
      });

      return null;
    }
    setSongs((songs) => [
      ...songs,
      {
        songName: songName,
        artistName: artistName,
        id: ++id,
        file: uploadFile,
        play: false,
      },
    ]);

    setModalOpen(false);
  };

  function handleUpload(e) {
    const file = e.target.files[0];
    setUploadFile(file);
    setIsUploaded(true);
  }

  return (
    <div className="uploadContent">
      <div className="closedButton">
        <svg
          className="closeIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 64 64"
          strokeWidth="3"
          stroke="#000000"
          fill="none"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
          <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
        </svg>
      </div>
      <div className="songNameInput">
        <label class="songNameLabel" for="songName">
          Song Name
        </label>
        <input
          id={"songName"}
          className={errors.songName ? "fieldError" : ""}
          type="text"
          onChange={handleSongNameChange}
          placeholder="Halo"
        ></input>
      </div>
      <div className="artistNameInput">
        <label className="artistName" for="artistName">
          Artist Name
        </label>
        <input
          id="artistName"
          className={errors.artistName ? "fieldError" : ""}
          type="text"
          onChange={handleArtistNameChange}
          placeholder="Blackbird"
        ></input>
      </div>

      <div className="saveFile">
        <div className="iconInput">
          <button class={`uploadButton ${errors.file ? "fieldError" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {uploadFile && <p>{uploadFile.name}</p>}
          <input
            accept=".mp3, .wav"
            onChange={handleUpload}
            className="uploadInput"
            type="file"
          ></input>
        </div>
      </div>

      {songs.file ? songs.file : null}
      <button className="saveSong" onClick={addSong}>
        Save
      </button>
    </div>
  );
}
