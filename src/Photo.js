import ImagePreview from './ImageClick';
import React from 'react';
function Photo(props) {
  return (
    <div className='card col-lg-4 col-md-5 col-sm-7' id='card'>
      <div className='card-img-top'>
        <ImagePreview imgsrc={props.imgsrc} iurl={props.iurl} />
        <div className='card-body '>
          <h2 className='card-text'>{props.id}</h2>
          <p className='card-text'> {props.title} </p>
        </div>
      </div>
    </div>
  );
}
export default Photo;
