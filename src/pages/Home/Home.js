import React from "react";

import VirtualizedGrid from "../../components/VirtualizedGrid/VirtualizedGrid";
import Cell from "../../components/Cell/Cell";

import { imageIndex } from "../../constants/imageIndex";
import {
  columnCount,
  columnWidth,
  rowHeight,
  rowCount,
} from "../../constants/home";
import "./Home.css";

const Home = () => (
  <div className="container">
    <h2>Photo Album Collection: By Implementing own virtualized Grid</h2>
    <VirtualizedGrid
      columnCount={columnCount}
      rowCount={Math.ceil(imageIndex.length / columnCount)}
      columnWidth={columnWidth}
      rowHeight={rowHeight}
      width={columnCount * columnWidth} // Width of the grid container
      height={rowCount * rowHeight} // Height of the grid container
      imageIndex={imageIndex}
      renderCell={Cell}
    />
  </div>
);
export default Home;
