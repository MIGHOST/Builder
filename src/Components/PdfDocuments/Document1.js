import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moment from "moment";

import font from "./font/montserrat-v14-latin-500.ttf";

const Document1 = ({ resume }) => {
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
          <View style={styles.titleBox}>
            <Text style={styles.title}>
              {basicInfo.firstName} {basicInfo.lastName}
            </Text>
            <Text style={styles.subtitle}>{basicInfo.jobTitle}</Text>
          </View>
          <View style={styles.viewBox}>
            <View style={styles.infoBox}>
              <View>
                <Text style={styles.infoTitle}>Info</Text>
                <View style={styles.border}></View>
                {basicInfo.country || basicInfo.city ? (
                  <View>
                    <Text style={styles.infoSubTitle}>Address</Text>
                    <Text style={styles.textInfo}>
                      {basicInfo.city}, {basicInfo.country}
                    </Text>
                  </View>
                ) : null}

                {basicInfo.phone ? (
                  <View>
                    <Text style={styles.infoSubTitle}>phone</Text>
                    <Text style={styles.textInfo}>{basicInfo.phone}</Text>
                  </View>
                ) : null}

                {basicInfo.email ? (
                  <View>
                    <Text style={styles.infoSubTitle}>E-mail</Text>
                    <Text style={styles.emailInfo}>{basicInfo.email}</Text>
                  </View>
                ) : null}

                {skills && (
                  <View>
                    <Text style={styles.infoTitle}>Skills</Text>
                    <View style={styles.border}></View>
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
            <View style={styles.profileBox}>
              <View>
                {basicInfo.summary ? (
                  <View>
                    <Text style={styles.infoTitle}>Profile</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.profileInfo}>{basicInfo.summary}</Text>
                  </View>
                ) : null}

                {employmentHistory ? (
                  <View>
                    <Text style={styles.infoTitle}>employment history</Text>
                    <View style={styles.border}></View>
                    <View style={styles.historyBox}>
                      <View>
                        {employmentHistory.map((el, i) => (
                          <View key={el.employer + i}>
                            <View style={styles.companyBox}>
                              <View>
                                <Text style={styles.infoSubTitle}>
                                  {el.jobTitle}, {el.employer}
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.textInfoCity}>
                                  {el.city}
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
                    <Text style={styles.infoTitle}>Education</Text>
                    <View style={styles.border}></View>
                    <View>
                      {educations.map((el, i) => (
                        <View key={el.school + i}>
                          <View style={styles.companyBox}>
                            <Text style={styles.infoSubTitle}>{el.school}</Text>
                            <Text style={styles.dataInfoEdu}>
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
                    <Text style={styles.infoTitle}>projects</Text>
                    <View style={styles.border}></View>
                    <View>
                      {projects.map((el, i) => (
                        <View key={el.projectTitle + i}>
                          <View>
                            <Text style={styles.infoSubTitle}>
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
                    <Text style={styles.infoTitle}>languages</Text>
                    <View style={styles.border}></View>
                    <View>
                      {languages.map((el, i) => (
                        <View key={el.language + i}>
                          <View>
                            <Text style={styles.infoSubTitle}>
                              {el.language}
                            </Text>
                          </View>
                          <Text style={styles.text}>{el.level}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  format: "truetype",
  src: font,
});

const styles = StyleSheet.create({
  body: {
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  titleBox: {
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  title: {
    fontSize: 34,
    fontWeight: 500,
    fontStyle: "normal",
    textAlign: "left",
    fontFamily: "Oswald",
    textTransform: "uppercase",
    marginBottom: 10,
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 10,
    fontFamily: "Oswald",
    textTransform: "uppercase",
    marginBottom: 20,
    letterSpacing: 2,
  },
  viewBox: {
    display: "flex",
    flexDirection: "row",
  },

  infoBox: {
    borderColor: "#d3d3d3",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    paddingTop: 25,
    paddingRight: 50,
    width: 150,
  },

  infoTitle: {
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  border: {
    backgroundColor: "black",
    width: 40,
    height: 3,
    marginTop: 4,
    marginBottom: 15,
  },

  infoSubTitle: {
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 8,
    letterSpacing: 2,
  },

  textInfo: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 20,
  },
  skillInfo: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "black",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  historyText: {
    paddingRight: 10,
  },
  emailInfo: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 30,
    textDecoration: "underline",
  },

  profileBox: {
    paddingTop: 20,
    paddingLeft: 20,
    width: 345,
  },

  profileInfo: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "grey",
    paddingBottom: 30,
    marginBottom: 20,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },

  historyBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 8,
  },

  textInfoCity: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 12,
  },

  dataInfo: {
    fontSize: 12,
    color: "black",
    marginBottom: 12,
  },

  dataInfoEdu: {
    fontSize: 12,
    color: "black",
    marginBottom: 20,
  },

  pageNumberBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  text: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 20,
  },
  pointInfo: {
    fontSize: 12,
    fontFamily: "Oswald",
    color: "grey",
  },
  pageNumber: {
    fontSize: 10,
    textAlign: "center",
    color: "grey",
  },
});

export default Document1;
