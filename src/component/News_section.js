import React ,{useState} from 'react'

export default function News_section(props) {
  return (

        
      <div className={`card text-${props.mode=='light'?'dark':'light'} bg-${props.mode=='dark'?'dark':'light'}`}>
<img src={props.url?props.url:""} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{props.title?props.title:""}</h5>
  <p className="card-text">{props.description?props.description:""}</p>
  <a href={props.clickurl} className={`btn btn-primary`}><b>More Detail</b></a>    
</div>
    </div>
  )
}
