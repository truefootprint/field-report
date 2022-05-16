import ImagePagination from "../pagination";
import React, { useState, useEffect, useCallback } from "react";
import { Col, Row, Spinner, Container, Form, FormControl, Modal, Button, Table } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal as ModalCarousel, ModalGateway } from "react-images";

function IssuePhotos({issuePhotos, data, issuePhotosCount, requestNextImages}) {
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

  return (
    <Col>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Gallery (Issues)
          </h6>
        </div>
        <div className="card-body">
          <Gallery photos={issuePhotos} onClick={openIssuesLightbox} />
          <hr />
          <ImagePagination
            requestNextImages={requestNextImages}
            photosCount={issuePhotosCount}
            whichPage={"issues"}
          />
          <ModalGateway>
            {viewerIssuesIsOpen ? (
              <ModalCarousel onClose={closeIssuesLightbox}>
                <Carousel
                  currentIndex={currentIssuesImage}
                  views={issuePhotos.map((x) => ({
                    ...x,
                    srcset: "hello", //x.srcSet,
                    caption: x.text, //x.title,
                  }))}
                />
              </ModalCarousel>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </Col>
  );
}

export default IssuePhotos;