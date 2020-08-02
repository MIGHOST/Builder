import React, { useState } from "react";
import classes from "./SkillItem.module.css";
import withToggle from "../../hoc/withToggle";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill, updateSkill } from "../../redux/actions/skills";

const SkillItem = ({ skill, toggle, open, index }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const changeSkill = (event) => {
    dispatch(updateSkill(index, { skill: event.target.value }));
  };

  const deleteOneSkill = () => {
    dispatch(deleteSkill(index));
  };

  return (
    <>
      <div
        className={
          theme === "dark"
            ? `${classes.SkillsContainer} ${classes.SkillsContainerDark}`
            : classes.SkillsContainer
        }
      >
        <div className={classes.Wrapper}>
          <p
            className={
              theme === "dark"
                ? `${classes.SkillItem__name} ${classes.SkillItem__nameDark}`
                : classes.SkillItem__name
            }
          >
            {skill}
          </p>
          <div className={classes.SkillItem_buttons}>
            <button
              className={`${
                theme === "dark"
                  ? `${classes.SkillItem_button} ${classes.SkillItem_button_Dark}`
                  : classes.SkillItem_button
              } ${
                theme === "dark"
                  ? `${classes.SkillItem_edit} ${classes.SkillItem_edit_Dark}`
                  : classes.SkillItem_edit
              }`}
              onClick={toggle}
            >
              Edit
            </button>
            <button
              className={`${
                theme === "dark"
                  ? `${classes.SkillItem_button} ${classes.SkillItem_button_Dark}`
                  : classes.SkillItem_button
              } ${
                theme === "dark"
                  ? `${classes.SkillItem_delete} ${classes.SkillItem_delete_Dark}`
                  : classes.SkillItem_delete
              }`}
              onClick={deleteOneSkill}
            >
              Delete
            </button>
            <button
              className={`${
                theme === "dark"
                  ? `${classes.SkillItem_button} ${classes.SkillItem_button_Dark}`
                  : classes.SkillItem_button
              } ${
                open
                  ? classes.SkillItem_sort
                  : theme === "dark"
                  ? `${classes.SkillItem_sortDown} ${classes.SkillItem_sortDownDark}`
                  : classes.SkillItem_sortDown
              } ${
                theme === "dark"
                  ? `${classes.SkillItem_sort} ${classes.SkillItem_sortDark}`
                  : classes.SkillItem_sortDark
              }`}
              onClick={toggle}
            ></button>
          </div>
        </div>
      </div>

      {open && (
        <form className={classes.SkillsInput}>
          <div
            className={
              theme === "dark"
                ? `${classes.SkillsNameContainer} ${classes.SkillsNameContainer_Dark}`
                : classes.SkillsNameContainer
            }
          >
            <input
              onChange={changeSkill}
              className={classes.Skill__name}
              type="text"
              name="Skill"
              placeholder="Enter your skill"
              value={skill}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default withToggle(SkillItem);
