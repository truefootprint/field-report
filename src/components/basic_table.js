import React, { useMemo, useCallback, useState } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import * as Rbs from "react-bootstrap";
import "./table.css";
import { MockData } from "./data";
import Carousel, { Modal, ModalGateway } from "react-images";

export const BasicTable = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    console.log("INSIDE LIGHTBOX");
    console.log(index);
    //console.log(photo);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [currentIssuesImage, setCurrentIssuesImage] = useState(0);
  const [viewerIssuesIsOpen, setIssuesViewerIsOpen] = useState(false);

  const openIssuesLightbox = useCallback((event, { photo, index }) => {
    setCurrentIssuesImage(index);
    setIssuesViewerIsOpen(true);
  }, []);

  const closeIssuesLightbox = () => {
    setCurrentIssuesImage(0);
    setIssuesViewerIsOpen(false);
  };

  const setSrcForPhotos = (photos) => {
    let pos = 1;
    const newArr = photos.map((obj, index) => {
      let newObj = {};
      if ([1, 2, 3, 4].includes(pos)) {
        newObj = { ...obj, [`src${pos}`]: obj.src };
        //delete newObj.src;
      }
      if (pos == 4) {
        pos = 0;
      }
      pos++;
      return newObj;
    });
    //[{src1: "erf", src2: "eff", src3: "pok", src4: "erfer"}]
    let numberOfObjects = Math.ceil(newArr);
    var foo = [];

    for (var i = 1; i <= numberOfObjects; i++) {
      let obj = {src1: newArr.shift(), src2: newArr.shift(), src3: newArr.shift(), src4: newArr.shift()}
      foo.push(i);
    }
    return newArr;
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => setSrcForPhotos(photos), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
      //manualPagination: true,
    },
    usePagination
  );

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
          {/*JSON.stringify(photos, null, 2)*/}
        </code>
      </pre>
      <table {...getTableProps()}>
        {/* <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead> */}
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      onClick={() => {
                        setCurrentImage(i);
                        setViewerIsOpen(true);
                      }}
                    >
                      {console.log("THE ROW")}
                      {console.log(row)}
                      <Rbs.Image src={cell.value} thumbnail />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={data.map((x) => ({
                src: x.src,
                srcset: "hello", //x.srcSet,
                caption: x.text, //x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BasicTable;
