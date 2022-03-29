import ImagePreview from './ImageClick';
function Photo(props) {
  return (
    <div className='col-lg-4'>
      <div className='card mb-4 box-shadow '>
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
