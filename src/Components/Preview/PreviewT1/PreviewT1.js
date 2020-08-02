import React from "react";
import { useSelector } from "react-redux";
import styles from "./PreviewT1.module.css";
import moment from "moment";

const PreviewT1 = () => {
  const resume = useSelector((state) => state.resume);
  const {
    basicInfo,
    skills,
    employmentHistory,
    educations,
    projects,
    languages,
  } = resume;
  return (
    <div className={styles.preview}>
      <div className={styles.topPart}>
        {(basicInfo.firstName || basicInfo.lastName) && (
          <h2 className={styles.name}>
            {`${basicInfo.firstName} ${basicInfo.lastName}`}
          </h2>
        )}
        {basicInfo.jobTitle && (
          <p className={styles.titleJob}>{basicInfo.jobTitle}</p>
        )}
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          {(basicInfo.city ||
            basicInfo.country ||
            basicInfo.phone ||
            basicInfo.email) && <h3 className={styles.componentTitle}>Info</h3>}
          <div className={styles.sidebarComponent}>
            <ul>
              {(basicInfo.city || basicInfo.country) && (
                <li className={styles.contactListItem}>
                  <h4 className={styles.listItemTitle}>Address</h4>
                  <p
                    className={styles.listItemContent}
                  >{`${basicInfo.city}, ${basicInfo.country}`}</p>
                </li>
              )}
              {basicInfo.phone && (
                <li className={styles.contactListItem}>
                  <h4 className={styles.listItemTitle}>Phone</h4>
                  <p
                    className={styles.listItemContent}
                  >{`${basicInfo.phone}`}</p>
                </li>
              )}
              {basicInfo.email && (
                <li className={styles.contactListItem}>
                  <h4 className={styles.listItemTitle}>Email</h4>
                  <p className={styles.listItemContent}>
                    <a
                      className={styles.emailLink}
                      href={`mailto:${basicInfo.email}`}
                    >{`${basicInfo.email}`}</a>
                  </p>
                </li>
              )}
            </ul>
          </div>
          {!!skills.length && (
            <div className={styles.sidebarComponent}>
              <h3 className={styles.componentTitle}>Skills</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.skill}>
                    <p className={styles.listItemTitle}>{skill.skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.cvInfo}>
          {basicInfo.summary && (
            <div className={styles.cvInfoComponent}>
              <h3 className={styles.componentTitle}>Profile</h3>
              <p className={styles.cvInfoData}>{basicInfo.summary}</p>
            </div>
          )}
          {!!employmentHistory.length && (
            <div className={styles.cvInfoComponent}>
              <h3 className={styles.componentTitle}> employment history</h3>
              <ul>
                {employmentHistory.map((job) => (
                  <li key={`${job.employer}-${job.jobTitle}`}>
                    <h4 className={styles.listItemTitle}>
                      {`${job.jobTitle}, ${job.employer}`}
                    </h4>
                    <p className={styles.listItemContent}>{job.city}</p>

                    <p className={styles.jobPeriod}>
                      {job.start || job.end
                        ? `${moment(job.start).format("MMM YYYY")} - ${moment(
                            job.end
                          ).format("MMM YYYY")}`
                        : ""}
                    </p>
                    <p className={styles.cvInfoData}>{job.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!!projects.length && (
            <div className={styles.cvInfoComponent}>
              <h3 className={styles.componentTitle}>projects</h3>
              <ul>
                {projects.map((proj) => (
                  <li key={`${proj.projectTitle}-${proj.description}`}>
                    <h4 className={styles.listItemTitle}>
                      {`${proj.company}, ${proj.projectTitle}`}
                    </h4>
                    <p className={styles.cvInfoData}>{proj.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!!educations.length && (
            <div className={styles.cvInfoComponent}>
              <h3 className={styles.componentTitle}>education</h3>
              <ul>
                {educations.map((edu) => (
                  <li key={edu.school}>
                    <h4 className={styles.listItemTitle}>
                      {`${edu.school}, ${edu.degree}`}
                    </h4>
                    <p className={styles.jobPeriod}>
                      {edu.start || edu.end
                        ? `${moment(edu.start).format("MMM YYYY")} - ${moment(
                            edu.end
                          ).format("MMM YYYY")}`
                        : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!!languages.length && (
            <div className={styles.cvInfoComponent}>
              <h3 className={styles.componentTitle}>languages</h3>
              <ul>
                {languages.map((lang) => (
                  <li key={lang.language}>
                    <h4 className={styles.listItemTitle}>
                      {`${lang.language} - ${lang.level}`}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewT1;
