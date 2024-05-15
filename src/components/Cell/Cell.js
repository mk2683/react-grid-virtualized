import { imageUrl } from "../../constants/home";
import "./Cell.css";

const Cell = ({ columnIndex, rowIndex, imageIndex }) => {
  return (
    <div
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? "GridItemOdd"
            : "GridItemEven"
          : rowIndex % 2
          ? "GridItemOdd"
          : "GridItemEven"
      }
    >
      <img
        key={imageIndex.id}
        className="image"
        src={`${imageUrl}${imageIndex.id}`}
        alt={`Random {imageIndex.id}`}
      />
      <h6>I: {imageIndex.id}</h6>
    </div>
  );
};

export default Cell;
