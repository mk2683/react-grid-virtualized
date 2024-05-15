import React, { useState, useRef, useCallback } from "react";

const VirtualizedGrid = ({
  columnCount,
  rowCount,
  columnWidth,
  rowHeight,
  width,
  height,
  renderCell,
  imageIndex,
}) => {
  const gridRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });

  const handleScroll = useCallback(() => {
    if (gridRef.current) {
      setScrollPosition({
        scrollTop: gridRef.current.scrollTop,
        scrollLeft: gridRef.current.scrollLeft,
      });
    }
  }, []);

  const visibleRowCount = Math.ceil(height / rowHeight);
  const visibleColumnCount = Math.ceil(width / columnWidth);

  const startRow = Math.floor(scrollPosition.scrollTop / rowHeight);
  const endRow = Math.min(rowCount, startRow + visibleRowCount);
  const startColumn = Math.floor(scrollPosition.scrollLeft / columnWidth);
  const endColumn = Math.min(columnCount, startColumn + visibleColumnCount);

  const cells = [];
  for (let rowIndex = startRow; rowIndex < endRow; rowIndex++) {
    for (
      let columnIndex = startColumn;
      columnIndex < endColumn;
      columnIndex++
    ) {
      cells.push(
        <div
          key={`${rowIndex}-${columnIndex}`}
          className={
            columnIndex % 2
              ? rowIndex % 2 === 0
                ? "GridItemOdd"
                : "GridItemEven"
              : rowIndex % 2
              ? "GridItemOdd"
              : "GridItemEven"
          }
          style={{
            position: "absolute",
            top: rowIndex * rowHeight,
            left: columnIndex * columnWidth,
            width: columnWidth,
            height: rowHeight,
          }}
        >
          {renderCell({
            columnIndex,
            rowIndex,
            imageIndex: imageIndex[rowIndex * columnCount + columnIndex],
          })}
        </div>
      );
    }
  }

  return (
    <div
      ref={gridRef}
      className="grid-container"
      style={{ width, height, overflow: "auto", position: "relative" }}
      onScroll={handleScroll}
    >
      <div
        style={{
          width: columnCount * columnWidth,
          height: rowCount * rowHeight,
          position: "relative",
        }}
      >
        {cells}
      </div>
    </div>
  );
};

export default VirtualizedGrid;
