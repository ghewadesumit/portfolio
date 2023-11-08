import { useState, useEffect, useMemo } from "react"
import "./Experience.scss"
import { ReactComponent as EYLOGO } from "../../assets/img/ey-icon.svg"

import { ReactComponent as SAPLOGO } from "../../assets/img/sap-icon.svg"

import { ReactComponent as LTILOGO } from "../../assets/img/lti-icon.svg"

const experienceData = [
  {
    companyUniqueId: "EYLLP",
    // companyLogo: <img src={EYLOGO} alt="ey-logo" />,
    companyLogo: <EYLOGO width="70%" height="70%" />,
    jobDetails: {
      companyName: "Ernst & Young LLP",
      location: `Hoboken, NJ`,
      title: "Full-Stack Engineer",
      summary: `I played a key role in the Trade Alert application as a Full-Stack Developer, successfully migrating it from Microsoft Access to a
        web-based platform. Additionally, I made significant contributions to enhance the responsiveness of the Chatbot and developed
        several components in ABX to improve its functionality, thereby enhancing patient-pharamacist-doctor interactions and
        healthcare support.`,
    },
  },
  {
    companyUniqueId: "SAP",
    companyLogo: <SAPLOGO width="80%" height="80%" />,
    jobDetails: {
      companyName: "SAP Labs",
      location: `Palo Alto, CA`,
      title: "UI Engineer",
      summary: `I played a key role in developing a Visual Studio Code and Theia IDE extension for SAP ERP's user experience using React, Redux, and Apollo GraphQL. Collaborating with a global team, we innovated on SAP Fiori elements, creating single-page applications with a focus on responsiveness and consistency. I built a GraphQL backend with NestJS, utilized Git for version control, and developed reusable React components. Our Agile approach included biweekly SCRUM meetings for progress updates.`,
    },
  },
  {
    companyUniqueId: "LTI",
    companyLogo: <LTILOGO width="70%" height="80%" />,
    jobDetails: {
      companyName: "Larsen & Tubro Infotech",
      location: `Pune, MH`,
      title: "Software Engineer",
      summary: `In the SAP Automation Tools Project (SMART ANALYZER), I led UI design, improved functionality for converting 60+ CSV files into a compact JSON format using JavaScript. The optimized JSON, reduced by 50-60%, was promptly delivered to the UI team, expediting the SMART ANALYZER TOOL presentation. I also integrated an Error log report for CSV file ambiguities. In the Equipment Management project, I developed a responsive UI for an equipment delivery status report using SAP-UI5, CSS3, and integrated new OData services for data extraction and field population.`,
    },
  },
]

function Experience() {
  const [experienceDetail, setExperienceDetail] = useState(null)
  const [activeExperience, setActiveExperience] = useState(null)

  const [expData, setExpData] = useState(null)

  useEffect(() => {
    setExpData(experienceData)
    setActiveExperience(experienceData[0].companyUniqueId)
    setExperienceDetail(experienceData[0].jobDetails)
  }, [])

  const experienceButtons = useMemo(() => {
    if (expData == null) return
    return expData?.map((item) => {
      return (
        <button
          key={item.companyUniqueId}
          onClick={(event) => {
            event.preventDefault()
            setExperienceDetail(item.jobDetails)
            setActiveExperience(item.companyUniqueId)
          }}
          style={{
            border: ``,
          }}
          className={`company-button ${
            activeExperience == item.companyUniqueId ? "exp-active" : ""
          }`}
        >
          {/*  */}
          <div className="logo-placeholder">{item.companyLogo}</div>{" "}
        </button>
      )
    })
  }, [expData, activeExperience])

  return (
    <div className="experience-container">
      <h1> My Career Journey </h1>
      <div className="experience-wrapper">
        <div className="experience-list">
          {experienceButtons}
          <div className="timeline"></div>
        </div>
        {experienceDetail && (
          <div className="experience-detail">
            <h2>
              {" "}
              {experienceDetail?.companyName},{" "}
              <span class="company-location">{experienceDetail?.location}</span>
            </h2>
            <h3> {experienceDetail?.title}</h3>
            <p> {experienceDetail?.summary}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
