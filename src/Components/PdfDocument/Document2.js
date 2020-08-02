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
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.profileText}>{basicInfo.summary}</Text>
              <Text style={styles.sectionTitle}>employment history</Text>
              <Text style={styles.profileSubtitle}>
                {employmentHistory.jobTitle} {employmentHistory.city}
              </Text>
              <Text style={styles.profileData}>
                {employmentHistory.start}-{employmentHistory.end}
              </Text>
              <Text style={styles.profileText}>
                {employmentHistory.description}
              </Text>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.profileSubtitle}>
                {educations.school} {educations.degree}
              </Text>
              <Text style={styles.profileData}>
                {educations.start}-{educations.end}
              </Text>
              <Text style={styles.profileSubtitle}>
                {educations.school} {educations.degree}
              </Text>
              <Text style={styles.profileData}>
                {educations.start}-{educations.end}
              </Text>
            </View>
            <View style={styles.skillsSection}>
              <Text style={styles.sectionTitle}>Skills</Text>

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
    maxWidth: 319,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 36,
    lineHeight: 42,
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.04em",
    textTransform: "uppercase",

    color: "#181c27",
  },

  // subtitle: {
  //   paddingTop: "16",

  //   // fontFamily: "Roboto",
  //   fontStyle: "normal",
  //   fontWeight: "normal",
  //   fontSize: 14,
  //   lineHeight: 16,
  //   display: "flex",
  //   alignItems: "center",
  //   textAlign: "center",
  //   letterSpacing: "0.1em",
  //   textTransform: "uppercase",

  //   color: "rgba(24, 28, 39, 0.6)",
  // },

  userBox: {
    width: "100%",
    paddingTop: "24",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  // titleText: {
  //   // fontFamily: "Roboto",
  //   fontStyle: "normal",
  //   fontWeight: "normal",
  //   fontSize: 14,
  //   lineHeight: 16,
  //   display: "flex",
  //   alignItems: "center",
  //   textAlign: "center",
  //   letterSpacing: "0.1em",

  //   color: "rgba(24, 28, 39, 0.6)",
  // },

  // textInfo: {
  //   fontSize: 14,
  //   letterSpacing: "0.1em",
  //   fontStyle: "normal",
  //   color: "rgba(24, 28, 39, 0.6)",
  // },

  // emailInfo: {
  //   fontSize: 14,
  //   color: "rgba(24, 28, 39, 0.6);",
  //   marginBottom: 40,
  //   textDecoration: "underline",
  // },

  section: {
    paddingTop: 61,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profileSection: { width: "70%" },
  skillsSection: { width: "30%" },

  sectionTitle: {
    width: 94,
    // marginBottom: 32,
    // padding: "4, 16",
    // fontFamily: "Roboto",
    // fontStyle: "normal",
    // fontWeight: "500",
    // fontSize: 18,
    // lineHeight: 21,
    display: "inline-block",
    // alignItems: "center",
    // letterSpacing: "0.04em",
    // textTransform: "uppercase",
    // color: "white",
    // backgroundColor: "rgb(78, 79, 80)",
  },

  sectionSubtitle: {
    paddingTop: 4,
    paddingBottom: 8,
    // fontFamily: "Roboto",
    // fontStyle: "normal",
    // fontWeight: "normal",
    // fontSize: 14,
    // lineHeight: 24,
    letterSpacing: "0.02em",
    color: "#181c27",
  },

  // profileText: {
  //   fontSize: 14,
  //   fontFamily: "Roboto",
  //   color: "grey",
  //   paddingBottom: 40,
  //   marginBottom: 40,
  // },

  // profileData: {
  //   fontSize: 14,
  //   color: "black",
  //   marginBottom: 16,
  // },

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
