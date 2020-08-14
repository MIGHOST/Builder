import React from "react";
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setEducation } from "../../redux/actions/educations";

const EducationItem = ({
  school,
  index,
  degree,
  start,
  end,
  open,
  toggle,
  handleRemoveClick,
}) => {
  const remove = (index) => {
    handleRemoveClick(index);
  };

  const dispatch = useDispatch();

  const handleSchool = (e) => {
    dispatch(
      setEducation(index, {
        school: e.target.value,
        degree: degree,
        start: start,
        end: end,
      })
    );
  };

  const handleDegree = (e) => {
    dispatch(
      setEducation(index, {
        school: school,
        degree: e.target.value,
        start: start,
        end: end,
      })
    );
  };

  const handleStart = (data) => {
    dispatch(
      setEducation(index, {
        school: school,
        degree: degree,
        start: data,
        end: end,
      })
    );
  };

  const handleEnd = (data) => {
    dispatch(
      setEducation(index, {
        school: school,
        degree: degree,
        start: start,
        end: data,
      })
    );
  };

  return (
    <div>
      <div className={style.degree}>
        <div className={style.degreeSchool}>
          <h2 className={style.schoolLabel}>{`${!!school ? school : "School"} ${
            !!degree ? degree : "degree"
          }`}</h2>
          <div className={style.degreeEdits}>
            <button
              onClick={toggle}
              className={`${style.degreeEditsHover} ${style.degreeEditIcon}`}
            >
              Edit
            </button>
            <button
              onClick={remove}
              className={`${style.degreeEditsHover} ${style.degreeDeleteIcon}`}
            >
              Delete
            </button>
            <button
              className={`${style.degreeEditsHover} ${
                !!open ? style.degreeTreeangle : style.degreeTreeangleRotate
              }`}
              onClick={toggle}
            ></button>
          </div>
        </div>

        <div className={style.degreeDates}>
          <p className={style.degreeText}>Start</p>
          <p className={style.Date}>
            {start ? `${moment(start).format("MM/YYYY")}` : "mm/yy"}
          </p>
          <p className={style.degreeText}>End</p>
          <p className={style.Date}>
            {end ? `${moment(end).format("MM/YYYY")}` : "mm/yy"}
          </p>
        </div>
      </div>

      {open && (
        <div className={style.fillIn}>
          <input
            type="text"
            placeholder="School"
            name="school"
            className={style.inputSpace}
            value={school}
            onChange={handleSchool}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            className={style.inputSpace}
            value={degree}
            onChange={handleDegree}
          />

          <div className={style.fillInDate}>
            <DatePicker
              selected={start}
              onChange={handleStart}
              className={style.inputDate}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
            <DatePicker
              selected={end}
              onChange={handleEnd}
              className={style.inputDate}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default withToggle(EducationItem);
