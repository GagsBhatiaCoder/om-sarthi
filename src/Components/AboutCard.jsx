import React from 'react';

export default function AboutCard ({ Img,title, content,}) {
      
  return (
    <div className="card d-flex flex-column align-items-center justify-content-center border-0 py-3 m-2" style={{width:"18rem", background:"#fff"}}>
        <img src={Img} className="card-img-top " style={{width:"100px"}} alt={title} />
  <div className="card-body">
    <h5 className="card-title text-center fw-bolder">{title}</h5>
    <p className="card-text text-center">{content}</p>
  </div>
</div>
  )
}
