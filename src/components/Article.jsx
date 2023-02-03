import React from "react"

export default function Article(props) {
  return (
    <div>
      <div className="article">
        <img className="article--image" src={props.imageUrl} />
        <div className="article--text">
          <div className="article--location-container">
            <h3 className="article--location"><i className="article--location-icon fa-solid fa-location-dot"></i> {props.location.toUpperCase()}</h3>
            <a className="article--link" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="article--title">{props.title}</h1>
          <p className="article--dates">{props.startDate} - {props.endDate}</p>
          <p className="article--description">{props.description}</p>
        </div>
      </div>
      <hr className="article--hr"/>
    </div>
  )
}
