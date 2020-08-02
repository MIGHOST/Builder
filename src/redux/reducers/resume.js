import { combineReducers } from "redux";
import basicInfo from "./basicInfo";
import employmentHistory from "./employmentHistory";
import skills from "./skills";
import languages from "./languages";
import projects from "./projects";
import educations from "./educations";

const resume = combineReducers({
  basicInfo,
  employmentHistory,
  skills,
  languages,
  projects,
  educations,
});

export default resume;
