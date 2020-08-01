import React from "react";
import { useSelector } from "react-redux";
import EmploymentHistoryList from "./employmentHistoryList";
import Education from "./Education";
import Skills from "./Skills";

import styles from "./PreviewT2.module.css";

const PreviewT2 = () => {
  const {
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    summary,
  } = useSelector((state) => state.resume.basicInfo);

  const employmentHistory = useSelector(
    (state) => state.resume.employmentHistory,
  );

  const education = useSelector((state) => state.resume.educations);
  const skills = useSelector((state) => state.resume.skills);

  return (
    <div className={styles.previewT2}>
      <h1 className={styles.name}>
        {firstName} {lastName}
      </h1>
      <h2 className={styles.jobTitle}>{jobTitle}</h2>

      <div className={styles.location}>
        <div className={styles.svg}>
          <img src="/icons/location.svg" className={styles.icon} />
          <p>
            {city}, {country}
          </p>
        </div>
        <div className={styles.svg}>
          <img src="/icons/Phone.svg" className={styles.icon} />
          <p className="phone">{phone}</p>
        </div>
        <div className={styles.svg}>
          <img src="/icons/Email.svg" className={styles.icon} />
          <p className="email">{email}</p>
        </div>
      </div>
      <div className={styles.resumeBlock}>
        <div className={styles.profile}>
          <h3 className={styles.nameBlock}>Profile</h3>
          <p className={styles.summary}>{summary}</p>
        </div>
        <div className={styles.history}>
          <h3 className={styles.nameBlock}>Employment history</h3>
          <ul>
            {employmentHistory.map((el) => (
              <li key={el.jobTitle} className={styles.list}>
                <EmploymentHistoryList {...el} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.education}>
          <h3 className={styles.nameBlock}>Education</h3>
          <ul>
            {education.map((el) => (
              <li key={el.school} className={styles.list}>
                <Education {...el} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skills}>
          <h3 className={styles.nameBlock}>skills</h3>
          <ul>
            {skills.map((skill) => (
              <li className={styles.skill}>
                <Skills {...skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreviewT2;
