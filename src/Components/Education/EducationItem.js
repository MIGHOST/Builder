import React from "react";
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useDispatch, useSelector} from "react-redux";
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
  const theme = useSelector(state => state.theme);
  const remove = index => {
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
      <div className={theme === "dark" ? style.degree_dark : style.degree}>
        <div className={style.degreeSchool}>
          <h2
            className={
              theme === "dark" ? style.schoolLabel_dark : style.schoolLabel
            }
          >{`${!!school ? school : "School"} ${
            !!degree ? degree : "degree"
          }`}</h2>
          <div className={style.degreeEdits}>
            <button
              onClick={toggle}
              className={
                theme === "dark"
                  ? style.degreeEditIcon_dark
                  : style.degreeEditIcon
              }
            >
              Edit
            </button>
            <button
              onClick={remove}
              className={
                theme === "dark"
                  ? style.degreeDeleteIcon_dark
                  : style.degreeDeleteIcon
              }
            >
              Delete
            </button>
            <button
              className={
                theme === "dark"
                  ? !!open
                    ? style.degreeTreeangle_dark
                    : style.degreeTreeangleRotate_dark
                  : !!open
                  ? style.degreeTreeangle
                  : style.degreeTreeangleRotate
              }
              onClick={toggle}
            ></button>
          </div>
        </div>

        <div className={style.degreeDates}>
          <p
            className={
              theme === "dark" ? style.degreeText_dark : style.degreeText
            }
          >
            Start
          </p>
          <p
            className={
              theme === "dark" ? style.degreeDate_dark : style.degreeDate
            }
          >
                    {start ? `${moment(start).format("MM/YYYY")}` : "mm/yy"}
          </p>
          <p
            className={
              theme === "dark" ? style.degreeText_dark : style.degreeText
            }
          >
            End
          </p>
          <p
            className={
              theme === "dark" ? style.degreeDate_dark : style.degreeDate
            }
          >
            {end ? `${moment(end).format("MM/YYYY")}` : "mm/yy"}
          </p>
        </div>
      </div>

      {open && (
        <div className={theme === "dark" ? style.fillIn_dark : style.fillIn}>
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
