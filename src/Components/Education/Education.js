import React from "react";
import style from "./Education.module.css";
import EducationItem from "./EducationItem";
import { addEducation, deleteEducation } from "../../redux/actions/educations";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import AddButton from "../AddButton/AddButton";

const Education = ({ educations }) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
      addEducation({
        school: "",
        degree: "",
        start: moment()._d,
        end: moment()._d,
      })
    );
  };

  const handleRemoveClick = (index) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className={style.wraper}>
      <h1 className={style.title}>Education</h1>
      <div className={style.itemsWrapper}>
        {educations.map((el, index) => (
          <EducationItem
            key={index}
            school={el.school}
            index={index}
            degree={el.degree}
            start={el.start}
            end={el.end}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </div>
      <AddButton onClick={handleAddClick} title={"Education"} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  educations: state.resume.educations,
});

export default connect(mapStateToProps)(Education);
