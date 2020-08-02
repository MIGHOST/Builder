import React from "react";
import Fonts from "./fonts/Roboto-Regular.ttf";

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
          <View style={styles.titleBox}>
            <Text style={styles.title}>
              {basicInfo.firstName} {basicInfo.lastName}
            </Text>
            <Text style={styles.subtitle}>{basicInfo.jobTitle}</Text>
            <View style={styles.userBox}>
              <Text style={styles.textInfo}>
                {basicInfo.city}, {basicInfo.country}
              </Text>
              <Text style={styles.textInfo}>{basicInfo.phone}</Text>
              <Text style={styles.emailInfo}>{basicInfo.email}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.profileSection}>
              <View style={styles.profileBox}>
                <Text style={styles.sectionTitle}>Profile</Text>
              </View>
              <Text style={styles.profileText}>{basicInfo.summary}</Text>
              <View style={styles.employmentBox}>
                <Text style={styles.sectionTitle}>employment history</Text>
              </View>

              <Text style={styles.sectionSubtitle}>
                {employmentHistory[0].jobTitle} {employmentHistory[0].city}
              </Text>
              <Text style={styles.profileData}>
                {employmentHistory[0].start}-{employmentHistory[0].end}
              </Text>
              <Text style={styles.profileText}>
                {employmentHistory.description}
              </Text>
              <View style={styles.educationsBox}>
                <Text style={styles.sectionTitle}>Education</Text>
              </View>

              <Text style={styles.sectionSubtitle}>
                {educations[0].school} {educations[0].degree}
              </Text>
              <Text style={styles.profileData}>
                {educations[0].start}-{educations[0].end}
              </Text>
              <Text style={styles.sectionSubtitle}>
                {educations[0].school} {educations[0].degree}
              </Text>
              <Text style={styles.profileData}>
                {educations[0].start}-{educations[0].end}
              </Text>
            </View>
            <View style={styles.skillsSection}>
              <View style={styles.skillsBox}>
                <Text style={styles.sectionTitle}>Skills</Text>
              </View>

              <View>
                {skills.map((el) => (
                  <Text style={styles.skillsInfo} key={el.skill}>
                    {el.skill}
                  </Text>
                ))}
              </View>
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
  family: "Roboto",
  format: "truetype",
  src: Fonts,

  // family: "Montserrat",
  // src: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
});

const styles = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    paddingVertical: 65,
    paddingHorizontal: 35,
  },

  wrapper: {
    boxShadow:
      "1px 2px 4px rgba(0, 0, 0, 0.06), 1px 3px 4px rgba(0, 0, 0, 0.08), 1px 4px 6px rgba(0, 0, 0, 0.12)",
    width: "100%",
  },

  titleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 36,
    alignItems: "center",
    letterSpacing: 4,
    textTransform: "uppercase",
    color: "#181c27",
  },

  subtitle: {
    paddingTop: "16",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 14,
    alignItems: "center",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "rgba(24, 28, 39, 0.6)",
  },

  userBox: {
    width: "100%",
    paddingTop: "24",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  titleText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 12,
    letterSpacing: 1,
    color: "rgba(24, 28, 39, 0.6)",
  },

  textInfo: {
    fontSize: 12,
    letterSpacing: 1,
    fontStyle: "normal",
    color: "rgba(24, 28, 39, 0.6)",
  },

  emailInfo: {
    fontSize: 14,
    letterSpacing: 1,
    color: "rgba(24, 28, 39, 0.6);",
    textDecoration: "underline",
  },

  section: {
    paddingTop: 61,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profileSection: { width: "70%" },
  skillsSection: { width: "30%" },

  profileBox: {
    backgroundColor: "rgb(78, 79, 80)",
    maxWidth: 107,
    display: "inline-block",
    marginBottom: 32,
  },

  employmentBox: {
    backgroundColor: "rgb(78, 79, 80)",
    maxWidth: 241,
    display: "inline-block",
    marginBottom: 32,
  },

  educationsBox: {
    backgroundColor: "rgb(78, 79, 80)",
    maxWidth: 136,
    display: "inline-block",
    marginBottom: 32,
  },

  skillsBox: {
    backgroundColor: "rgb(78, 79, 80)",
    maxWidth: 94,
    display: "inline-block",
    marginBottom: 32,
  },

  sectionTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 18,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "white",
    alignSelf: "center",
  },

  sectionSubtitle: {
    paddingBottom: 4,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 14,
    letterSpacing: 2,
    color: "#181c27",
  },

  profileText: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "rgba(24, 28, 39, 0.6)",
    marginBottom: 40,
    letterSpacing: 1,
  },

  profileData: {
    fontSize: 14,
    color: "#181C27",
    marginBottom: 16,
    letterSpacing: 1,
  },

  skillsInfo: {
    fontSize: 14,
    color: "#rgba(24, 28, 39, 0.6)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

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
