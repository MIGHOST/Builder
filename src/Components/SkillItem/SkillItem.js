import React from "react";
import classes from "./SkillItem.module.css";
import withToggle from "../../hoc/withToggle";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill, updateSkill } from "../../redux/actions/skills";

const SkillItem = ({ skill, toggle, open, index }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const changeSkill = event => {
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
            ? classes.SkillsContainer_dark
            : classes.SkillsContainer
        }
      >
        <div className={classes.Wrapper}>
          <p
            className={
              theme === "dark"
                ? classes.SkillItem__name_dark
                : classes.SkillItem_name
            }
          >
            {skill}
          </p>
          <div className={classes.SkillItem_buttons}>
            <button
              className={
                theme === "dark"
                  ? classes.SkillItem_edit_dark
                  : classes.SkillItem_edit
              }
              onClick={toggle}
            >
              Edit
            </button>
            <button
              className={
                theme === "dark"
                  ? classes.SkillItem_delete_dark
                  : classes.SkillItem_delete
              }
              onClick={deleteOneSkill}
            >
              Delete
            </button>
            <button
              className={
                theme === "dark"
                  ? open
                    ? classes.SkillItem_sort_dark
                    : classes.SkillItem_sortDown_dark
                  : open
                  ? classes.SkillItem_sort
                  : classes.SkillItem_sortDown
              }
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
                ? classes.SkillsNameContainer_dark
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
