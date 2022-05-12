import ImagePagination from "../pagination";
import React, { useState, useEffect, useCallback } from "react";
import { Col, Row, Spinner, Container, Form, FormControl, Modal, Button, Table } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal as ModalCarousel, ModalGateway } from "react-images";

function ResponsePhotos({responses, photos, data, requestNextImages}) {  
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return (
        <Col>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Gallery (reponses)
              </h6>
            </div>
            <div className="card-body">
              <Gallery photos={photos} onClick={openLightbox}/>
              <hr/>
              <ImagePagination
                requestNextImages={requestNextImages}
                photo_count={data.photos_count}
              />
              <ModalGateway>
                {viewerIsOpen ? (
                  <ModalCarousel onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map((x) => ({
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
      )
}

export default ResponsePhotos;
