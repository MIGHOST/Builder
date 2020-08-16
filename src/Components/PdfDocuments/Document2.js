import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image
} from "@react-pdf/renderer";
import moment from "moment";
import styles from "./Document2Style";

const Document2 = ({resume}) => {
  const {
    basicInfo,
    employmentHistory,
    skills,
    educations,
    languages,
    projects,
  } = resume;

  return (
    <Document>
      <Page size="A4" style={styles.body} wrap={true}>
        <View style={styles.section}>
            <View>
                <Text style={styles.title}>
                {basicInfo.firstName} {basicInfo.lastName}
                </Text>
                <Text style={styles.subtitle}>{basicInfo.jobTitle}</Text>
            </View>
            <View style={styles.infoBox}>
                {basicInfo.country || basicInfo.city ? (
                    <View style={styles.infoLocation}>
                        <Image src="./icons/Location.png" style={styles.iconLocation}/>
                        <Text style={styles.textInfo}>
                            {basicInfo.city}, {basicInfo.country}
                        </Text>
                    </View>
                ) : null}

                {basicInfo.phone ? (
                    <View style={styles.infoLocation}>
                        <Image src="./icons/Phone.png" style={styles.iconPhone}/>
                        <Text style={styles.textInfo}>{basicInfo.phone}</Text>
                    </View>
                ) : null}

                {basicInfo.email ? (
                    <View style={styles.infoLocation}>
                        <Image src="./icons/Mail.png" style={styles.iconMail}/>
                        <Text style={styles.emailInfo}>{basicInfo.email}</Text>
                    </View>
                ) : null}
            </View>
            <View style={styles.profileBox}>
              <View style={styles.firstColumn}>
                {basicInfo.summary ? (
                  <View>
                    <Text style={styles.infoTitleProfile}>Profile</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.profileInfo}>{basicInfo.summary}</Text>
                  </View>
                ) : null}

                {employmentHistory ? (
                  <View>
                    <Text style={styles.infoTitleEmployment}>employment history</Text>
                    <View style={styles.border}></View>
                    <View style={styles.historyBox}>
                      <View>
                        {employmentHistory.map((el, i) => (
                          <View key={el.employer + i}>
                            <View style={styles.companyBox}>
                              <View>
                                <Text style={styles.infoSubTitle}>
                                  {el.jobTitle}, {el.employer}, {el.city}
                                </Text>
                              </View>
                            </View>
                            <Text style={styles.dataInfo}>
                              {el.start
                                ? moment(el.start).format("MMM YYYY")
                                : ""}{" "}
                              -{" "}
                              {el.end ? moment(el.end).format("MMM YYYY") : ""}
                            </Text>
                            <Text style={styles.pointInfo}>
                              {el.description}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                ) : null}

                {educations ? (
                  <View>
                    <Text style={styles.infoTitleEducation}>Education</Text>
                    <View style={styles.border}></View>
                    <View>
                      {educations.map((el, i) => (
                        <View key={el.school + i}>
                          <View style={styles.companyBox}>
                            <Text style={styles.infoSubTitle}>{el.school}, {el.degree}</Text>
                            <Text style={styles.dataInfo}>
                              {el.start
                                ? moment(el.start).format("MMM YYYY")
                                : ""}{" "}
                              -{" "}
                              {el.end ? moment(el.end).format("MMM YYYY") : ""}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
                {projects ? (
                  <View>
                    <Text style={styles.infoTitleProjects}>projects</Text>
                    <View style={styles.border}></View>
                    <View>
                      {projects.map((el, i) => (
                        <View key={el.projectTitle + i}>
                          <View>
                            <Text style={styles.infoSubTitleSecond}>
                              {el.projectTitle}, {el.company}
                            </Text>
                          </View>
                          <Text style={styles.textInfo}>{el.description}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
                {languages ? (
                  <View>
                    <Text style={styles.infoTitleLanguages}>languages</Text>
                    <View style={styles.border}></View>
                    <View>
                      {languages.map((el, i) => (
                        <View key={el.language + i}>
                          <View>
                            <Text style={styles.infoSubTitleSecond}>
                              {el.language}, {el.level}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>
              <View style={styles.secondColumn}>
                {skills && (
                  <View>
                    <Text style={styles.infoTitleSkills}>Skills</Text>
                    <View>
                      {skills.map((el, i) => (
                        <Text style={styles.skillInfo} key={el.skill + i}>
                          {el.skill}
                        </Text>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </View>
        </View>
      </Page>
    </Document>
  );
};

export default Document2;