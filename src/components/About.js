import React, {useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
import aboutdata from "./aboutdata"
// import { useStaticQuery } from "gatsby"


const Jobs = () => {
     const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = aboutdata[value]

    return (
        <section className="section jobs">
      <Title title="About Point Blank" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {aboutdata.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
  
}

export default Jobs

