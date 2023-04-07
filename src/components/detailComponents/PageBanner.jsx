import React from 'react'

const PageBanner = (props) => {
  return (
    <section
        className="detail-banner"
        style={props.address && {
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.5)),
          url(${props.address}) no-repeat center center / cover`,
        }}
      >
        <h1>{props.title}</h1>
      </section>
  )
}

export default PageBanner