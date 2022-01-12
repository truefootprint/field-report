import React, { useState, useEffect, useCallback } from "react";
import MultiChoiceGraph from "./multi_choice_graph.js";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import Gallery from "react-photo-gallery";
import * as Rbs from "react-bootstrap";
import DatePicker from "react-datepicker";
import Carousel, { Modal, ModalGateway } from "react-images";

function me() {
  alert("me");
}

export default function ImagePagination({ requestNextImages, photo_count, whichPage="responses" }) {
  const [active, setActive] = useState(1);
  
  function pageItems(requestNextImages, photo_count, whichPage) {
    //let active = 1;
    let items = [];
    console.log("photo count");
    console.log(photo_count);
    let ceil = Math.ceil((photo_count/10));
    for (let number = 1; number <= ceil; number++) {
      console.log("INSIDE PAGE ITEMS");
      let offset = (number - 1)*(10)
      items.push(
        <Rbs.Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {requestNextImages(offset, 10, whichPage); setActive(number)}}
        >
          {number}
        </Rbs.Pagination.Item>
      );
    }
    return items;
  }

  return (
    <div>
      <Rbs.Pagination>{pageItems(requestNextImages, photo_count, whichPage)}</Rbs.Pagination>
    </div>
  );
}
