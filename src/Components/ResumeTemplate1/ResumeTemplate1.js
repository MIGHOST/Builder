import React from "react";
import { useSelector } from "react-redux";
import classes from "./ResumeTemplate1.module.css";
import moment from "moment";
const ResumeTemplate1 = () => {
  const resume = useSelector((state) => state.resume);
  //------Global State----------------------------------------
  const {
    firstName,
    lastName,
    city,
    phone,
    email,
    country,
    summary,
    jobTitle,
  } = resume.basicInfo;
  const { employmentHistory, educations, languages, projects, skills } = resume;
  //===================================================
  //------Model State-------------------------------------
  const modelBasicInfo = {
    type: 1,
    id: "",
    title: "",
    jobTitle: "Front-End Developer",
    firstName: "Daniel",
    lastName: "Johnson",
    email: "email@sample.com",
    phone: "+38 000 111 11 11",
    country: "Ukraine",
    city: "Kiev",
    summary:
      "I am currently looking for a company that has a common goal to provide high-quality services with passion, resulting in satisfaction for both the business and the employees. As a motivated team player, I would like to work on interesting projects with people, who will become my second family",
  };
  const modelEmploymentHistory = [
    {
      jobTitle: "Front end Developer",
      employer: "Google",
      start: "Jan 2020",
      end: "Jul 2020",
      city: "Kyiv",
      description:
        "I am currently looking for a company that has a common goal to provide high-quality services with passion, resulting in satisfaction for both the business and the employees.",
    },
  ];
  const modelSkills = [
    { skill: "HTML5" },
    { skill: "SASS/SCSS" },
    { skill: "JavaScript" },
    { skill: "ES6+" },
    { skill: "React/Redux" },
    { skill: "Bootstrap" },
    { skill: "jQuery" },
  ];
  const modelLanguages = [
    {
      language: "Ukraine",
      level: "Native",
    },
  ];
  const modelProjects = [
    {
      projectTitle: "YouTube",
      company: "Google",
      description:
        "I am currently looking for a company that has a common goal to provide high-quality services with passion.",
    },
  ];
  const modelEducations = [
    {
      school: "Best school ever",
      degree: "master",
      start: "Jan 2020",
      end: "Jul 2020",
    },
  ];
  let finalSkills = skills.length ? skills : modelSkills;
  let finalEmploymentHistory = employmentHistory.length
    ? employmentHistory
    : modelEmploymentHistory;
  let finalEducations = educations.length ? educations : modelEducations;
  let finalLanguages = languages.length ? languages : modelLanguages;
  let finalProjects = projects.length ? projects : modelProjects;
  return (
    <div className={classes.resumeWrapper}>
      <div className={classes.container}>
      <div className={classes.wrapper_title}>
        <h1 className={`${classes.name} ${classes.text_primary}`}>
          {`${!firstName ? modelBasicInfo.firstName : firstName} ${
            !lastName ? modelBasicInfo.lastName : lastName
          }`}
        </h1>
        <p className={`${classes.job} ${classes.text_secondary}`}>
          {!jobTitle ? modelBasicInfo.jobTitle : jobTitle}
        </p>
      </div>
      <div className={classes.wrapper_columns}>
        {/**----------------------------column Left-------------------------------------- */}
        <div className={classes.wrapper_column_left}>
          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              info
            </h2>
            <p className={`${classes.subtitle} ${classes.text_primary}`}>
              Address
            </p>
            <p className={`${classes.text_secondary} ${classes.info_text}`}>
              {`${!city ? modelBasicInfo.city : city}, ${
                !country ? modelBasicInfo.country : country
              } `}
            </p>
            <p className={`${classes.subtitle} ${classes.text_primary}`}>
              phone
            </p>
            <p className={`${classes.text_secondary} ${classes.info_text}`}>
              {!phone ? modelBasicInfo.phone : phone}
            </p>
            <p className={`${classes.subtitle} ${classes.text_primary}`}>
              E-mail
            </p>
            <a
              className={`${classes.text_secondary} ${classes.info_text} ${classes.info_email}`}
              href={`mailto:${email}`}
            >
              {!email ? modelBasicInfo.email : email}
            </a>
          </div>
          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Skills
            </h2>
            {finalSkills.map((el) => (
              <p
                className={`${classes.text_primary} ${classes.skill_text} `}
                key={el.skill}
              >
                {el.skill}
              </p>
            ))}
          </div>
        </div>
        {/**----------------------------------column Right-------------------------------- */}
        <div className={classes.wrapper_column_right}>
          {/**--------------------------profile------------------------------ */}
          <div
            className={`${classes.wrapper_column} ${classes.section_profile}`}
          >
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Profile
            </h2>
            <p className={`${classes.text_secondary}`}>
              {!summary ? modelBasicInfo.summary : summary}
            </p>
          </div>
          {/** ================================================================*/}
          {/**--------------------------Employment history-------------------- */}
          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Employment history
            </h2>
            {finalEmploymentHistory.map((el) => (
              <div key={`${el.jobTitle}, ${el.employer}, ${el.city}`}>
                <div className={`${classes.employment_history_title}`}>
                  <p className={`${classes.text_primary}`}>
                    {`${el.jobTitle}, ${el.employer}`}
                  </p>
                  <p className={`${classes.text_secondary}`}>{el.city}</p>
                </div>
                <p
                  className={`${classes.text_primary} ${classes.employment_history_data}`}
                >
                  {el.start ? `${moment(el.start).format("MMM YYYY")}` : ""}-
                  {el.end ? `${moment(el.end).format("MMM YYYY")}` : ""}
                </p>
                <p className={`${classes.text_secondary}`}>{el.description}</p>
              </div>
            ))}
          </div>
          {/** ================================================================*/}
          {/**--------------------------Education----------------------------- */}
          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Education
            </h2>
            {finalEducations.map((el) => (
              <div key={educations}>
                <div className={`${classes.employment_history_title}`}>
                  <p
                    className={`${classes.text_primary}`}
                  >{`${el.school}, ${el.degree}`}</p>
                </div>
                <p
                  className={`${classes.text_primary} ${classes.employment_history_data}`}
                >
                  {el.start ? `${moment(el.start).format("MMM YYYY")}` : ""}-
                  {el.end ? `${moment(el.end).format("MMM YYYY")}` : ""}
                </p>
              </div>
            ))}
          </div>
          {/** ================================================================*/}
          {/**--------------------------languages----------------------------- */}
          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Languages
            </h2>
            {finalLanguages.map((el) => (
              <div key={languages} className={classes.languages_wrapper}>
                <p
                  className={`${classes.text_primary} ${classes.skill_text} ${classes.languages_language}`}
                >
                  {`${el.language} - ${el.level}`}
                </p>
              </div>
            ))}
          </div>
          {/** ================================================================*/}
          {/**--------------------------projects------------------------------ */}
          <div className={`${classes.wrapper_column} `}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Projects
            </h2>
            {finalProjects.map((el) => (
              <div key={projects}>
                <p
                  className={`${classes.text_primary} ${classes.projects_title}`}
                >
                  {`${el.projectTitle}, ${el.company}`}
                </p>
                <p className={`${classes.text_secondary}`}>{el.description}</p>
              </div>
            ))}
          </div>
          {/** ================================================================*/}
        </div>
      </div>
      </div>
    </div>
  );
};
export default ResumeTemplate1;