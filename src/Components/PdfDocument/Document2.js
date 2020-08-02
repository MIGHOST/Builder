import React from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const Document2 = ({ resume }) => {
  const { basicInfo, employmentHistory, skills, educations } = resume;
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.wrapper}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>
              {basicInfo.firstName} {basicInfo.lastName}
            </Text>
            <Text style={styles.subtitle}>{basicInfo.jobTitle}</Text>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionInfo}>
              <Text style={styles.infoTitle}>Info</Text>
              <Text style={styles.infoBorder}></Text>
              <Text style={styles.infoSubtitle}>Address</Text>
              <Text style={styles.infoText}>
                {basicInfo.city}, {basicInfo.country}
              </Text>
              <Text style={styles.infoSubtitle}>Phone</Text>
              <Text style={styles.infoText}>{basicInfo.phone}</Text>
              <Text style={styles.infoSubtitle}>E-mail</Text>
              <Text style={styles.emailInfo}>{basicInfo.email}</Text>

              <Text style={styles.infoTitle}>Skills</Text>
              <Text style={styles.infoBorder}></Text>
              <View>
                {skills.map((el) => (
                  <Text style={styles.infoSubtitle} key={el.skill}>
                    {el.skill}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.sectionAbout}>
              <View style={styles.sectionBorder}>
                <Text style={styles.aboutTitle}>Profile</Text>
                <Text style={styles.aboutBorder}></Text>
                <Text style={styles.aboutText}>{basicInfo.summary}</Text>
              </View>

              <Text style={styles.aboutTitle}>employment history</Text>
              <Text style={styles.aboutBorder}></Text>
              <Text style={styles.aboutSubtitle}>
                {employmentHistory.jobTitle} {employmentHistory.city}
              </Text>
              <Text style={styles.aboutData}>
                {employmentHistory.start}-{employmentHistory.end}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.aboutSubtitle}>
                {employmentHistory.jobTitle} {employmentHistory.city}
              </Text>
              <Text style={styles.aboutData}>
                {employmentHistory.start}-{employmentHistory.end}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.aboutText}>
                {employmentHistory.description}
              </Text>

              <Text style={styles.aboutTitle}>Education</Text>
              <Text style={styles.aboutBorder}></Text>
              <Text style={styles.aboutSubtitle}>
                {educations.school} {educations.degree}
              </Text>
              <Text style={styles.aboutData}>
                {educations.start}-{educations.end}
              </Text>
              <Text style={styles.aboutSubtitle}>
                {educations.school} {educations.degree}
              </Text>
              <Text style={styles.aboutData}>
                {educations.start}-{educations.end}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",

  // family: "Montserrat",
  // src: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
});

const styles = StyleSheet.create({
  body: {
    // fontFamily: "Montserrat",
    fontFamily: "Oswald",
    paddingVertical: 65,
    paddingHorizontal: 35,
  },

  // wrapper: {
  //   boxShadow:
  //     "1px 2px 4px rgba(0, 0, 0, 0.06), 1px 3px 4px rgba(0, 0, 0, 0.08), 1px 4px 6px rgba(0, 0, 0, 0.12)",
  //   width: "100%",
  // },

  titleSection: {
    borderColor: "rgba(24, 28, 39, 0.1)",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },

  title: {
    fontStyle: "normal",
    fontSize: 48,
    textTransform: "uppercase",
    color: " #181C27",
    letterSpacing: "0.04em",
    textAlign: "left",
    marginBottom: 20,
  },

  subtitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: "rgba(24, 28, 39, 0.6)",
    letterSpacing: "0.1em",
    paddingTop: 16,
    marginBottom: 40,
  },

  section: {
    display: "flex",
    flexWrap: "wrap",
  },

  infoBorder: {
    backgroundColor: "black",
    width: 40,
    height: 4,
    marginTop: 3,
    marginBottom: 40,
  },

  aboutBorder: {
    backgroundColor: "black",
    width: 40,
    height: 4,
    marginTop: 3,
    marginBottom: 40,
  },

  sectionInfo: {
    borderColor: "#d3d3d3",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    paddingTop: 40,
    paddingRight: 50,
    width: 150,
    // border: "1px solid rgba(24, 28, 39, 0.1)",
    // transform: "rotate(-90deg)",
  },

  infoTitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#181C27",
  },

  infoSubtitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    color: "#181C27",
  },

  infoText: {
    fontSize: 14,
    letterSpacing: "0.1em",
    fontStyle: "normal",
    color: "rgba(24, 28, 39, 0.6)",
  },

  emailInfo: {
    fontSize: 14,
    color: "rgba(24, 28, 39, 0.6);",
    marginBottom: 40,
    textDecoration: "underline",
  },

  sectionAbout: {
    paddingTop: 40,
    paddingLeft: 30,
  },

  sectionBorder: {
    borderColor: "rgba(24, 28, 39, 0.1)",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },

  aboutTitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#181C27",
  },

  aboutSubtitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    color: "#181C27",
  },

  aboutText: {},

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Document2;
