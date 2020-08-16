import { StyleSheet, Font } from "@react-pdf/renderer";
import font from "./font/montserrat-v14-latin-500.ttf";

Font.register({
    family: "Oswald",
    format: "truetype",
    src: font,
});

const styles = StyleSheet.create({
    body: {
      paddingVertical: 55,
      paddingHorizontal: 50,
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      fontStyle: "normal",
      textAlign: "center",
      fontFamily: "Oswald",
      textTransform: "uppercase",
      marginBottom: 10,
      letterSpacing: 2,
    },
  
    subtitle: {
      fontSize: 8,
      fontFamily: "Oswald",
      color: "grey",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: 15,
      letterSpacing: 2,
    },

    viewBox: {
      display: "flex",
      flexDirection: "row",
    },
  
    infoBox: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 73,
    },

    infoLocation: {
        display: "flex",
        flexDirection: "row",
    },
  
    infoTitleProfile: {
      fontSize: 11,
      color: "white",
      backgroundColor: "grey",
      textTransform: "uppercase",
      width: 70,
      paddingHorizontal: 10,
      paddingVertical: 2,
      marginBottom: 25,
    },

    infoTitleEmployment: {
        fontSize: 11,
        color: "white",
        backgroundColor: "grey",
        textTransform: "uppercase",
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 25,
      },
      infoTitleEducation: {
        fontSize: 11,
        color: "white",
        backgroundColor: "grey",
        textTransform: "uppercase",
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 25,
      },
      infoTitleSkills: {
        fontSize: 11,
        color: "white",
        backgroundColor: "grey",
        textTransform: "uppercase",
        width: 60,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 25,
      },
      infoTitleLanguages: {
        fontSize: 11,
        color: "white",
        backgroundColor: "grey",
        textTransform: "uppercase",
        width: 90,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 30,
        marginBottom: 25,
      },
      infoTitleProjects: {
        fontSize: 11,
        color: "white",
        backgroundColor: "grey",
        textTransform: "uppercase",
        width: 80,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 30,
        marginBottom: 25,
      },

    iconLocation: {
        width: 8,
        height: 10
    },

    iconPhone: {
        width: 7,
        height: 10
    },

    iconMail: {
        width: 11,
        height: 8
    },
  
    infoSubTitle: {
      fontSize: 10,
      marginBottom: 8,
      fontWeight: 900,
    },
    infoSubTitleSecond: {
      fontSize: 10,
      marginLeft: 3,
      marginBottom: 8,
      color: "black"
    },
  
    textInfo: {
      fontSize: 8,
      fontFamily: "Oswald",
      color: "grey",
      marginBottom: 20,
      paddingLeft: 10,
    },
    skillInfo: {
      fontSize: 8,
      fontFamily: "Oswald",
      color: "grey",
      marginLeft: 3,
      marginBottom: 5,
      textTransform: "uppercase",
    },
    historyText: {
      paddingRight: 10,
    },
    emailInfo: {
      fontSize: 8,
      fontFamily: "Oswald",
      color: "grey",
      marginBottom: 30,
      textDecoration: "underline",
      paddingLeft: 10,
    },
  
    profileBox: {
      paddingTop: 10,
      paddingLeft: 10,
      display: "flex",
      flexDirection: "row",
    },

    firstColumn: {
      width: 320,
    },

    secondColumn: {
      marginLeft: 65,
    },
  
    profileInfo: {
      fontSize: 8,
      fontFamily: "Oswald",
      color: "grey",
      lineHeight: 2,
      marginBottom: 20,
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
      fontSize: 8,
      color: "black",
      marginBottom: 17,
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
      marginLeft: 3,
      fontSize: 8,
      lineHeight: 2.3,
      fontFamily: "Oswald",
      color: "grey",
    },
    pageNumber: {
      fontSize: 10,
      textAlign: "center",
      color: "grey",
    },
  });

export default styles;