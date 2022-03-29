/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import React from 'react';
import axios from 'axios';
import Photo from './Photo';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Allproducts(props) {
  const [modal, setModal] = useState(false);
  let [product, setProduct] = useState([]);
  let [PageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${PageNo}/photos`)
      .then((res) => setProduct(res.data), setIsLoading(false));
  }, [PageNo]);
  return (
    <div>
      <h1>Displaying Album Number: {PageNo}</h1>
      <div className='album py-5 bg-light' id='album'>
        <div className='container'>
          <div className='row'>
            {isLoading ? (
              <Spinner animation='border' role='status'>
                <span>Loading:</span>
              </Spinner>
            ) : (
              product.map((val, index) => {
                return (
                  <Photo
                    key={index}
                    iurl={val.url}
                    imgsrc={val.thumbnailUrl}
                    title={val.title}
                  />
                );
              })
            )}
          </div>
          <center>
            <div className='page'>
              <Pagination className='col-lg-4 col-md-3 mt-2 mx-auto col-sm-4'>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink onClick={() => setPageNo(1)}>
                    {'<<'}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink
                    onClick={() => {
                      if (PageNo > 1) {
                        setPageNo(PageNo - 1);
                      } else {
                        setPageNo(1);
                      }
                    }}
                  >
                    {'<'}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink onClick={() => setPageNo(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink onClick={() => setPageNo(2)}>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink onClick={() => setPageNo(3)}>
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink onClick={() => setPageNo(4)}>
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => setPageNo(5)}>
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink
                    onClick={() => {
                      if (PageNo >= 100) {
                        setPageNo(100);
                      } else {
                        setPageNo(PageNo + 1);
                      }
                    }}
                  >
                    {'>'}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className='mx-md-auto'>
                  <PaginationLink onClick={() => setPageNo(100)}>
                    {'>>'}
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
export default Allproducts;
