import React from 'react'
import '../assets/style.css'
const Card = props => {
  return (
    <div className="card">
      <div className="p-2">
        <img alt="..." src={props.image} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="h4">{props.title}</h3>
        <span className="d-block text-muted text-sm font-semibold">
          {props.price}
        </span>
        <p className="mt-4 mb-6">{props.desc}</p>
        <a href="#" className="btn btn-sm btn-primary">
          Saiba mais
        </a>
      </div>
    </div>
  )
}

export default Card
