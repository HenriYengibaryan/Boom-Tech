import AddAllButton from "../AddAllButton/AddAllButton";
import PlayAllButton from "../PlayAllButton/PlayAllButton";
import "./style.css";

function PlayAdd() {
  return (
    <div className="playAdd">
      <PlayAllButton />
      <AddAllButton />
    </div>
  );
}
export default PlayAdd;
