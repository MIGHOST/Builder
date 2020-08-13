import React from "react";
import classes from "./Skills.module.css";
import SkillItem from "../SkillItem/SkillItem";
import { useSelector, useDispatch } from "react-redux";
import { addSkill } from "../../redux/actions/skills";
import AddButton from "../AddButton/AddButton";

const Skills = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const addOneSkill = () => {
    dispatch(addSkill());
  };

  const skillsList = useSelector(state => state.resume.skills);
  return (
    <div className={classes.Container}>
      <h2
        className={
          theme === "dark" ? classes.Skill__title_dark : classes.Skill__title
        }
      >
        Skills
      </h2>
      <ul className={classes.Skill__list}>
        {skillsList.map((skill, index) => (
          <li className={classes.Skill__item} key={index}>
            <SkillItem {...skill} index={index} />
          </li>
        ))}
      </ul>
      <AddButton onClick={addOneSkill} title={"Skill"} />
    </div>
  );
};

export default Skills;
