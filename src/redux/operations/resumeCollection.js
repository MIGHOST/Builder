import {
  saveResume,
  getResume,
  deleteResume,
} from "../actions/resumeCollection";
import { paths, CLEAR_RESUME } from "../../constants";

const { db } = require("../../configFirebase");

export const saveResumeToDatabase = (
  collectionName,
  data,
  history,
  id
) => async (dispatch) => {
  try {
    if (id) {
      await db.collection(collectionName).doc(id).update(data);
    } else {
      const result = await db.collection(collectionName).add(data);

      const item = { ...data, id: result.id };
      dispatch(saveResume(item));
    }

    dispatch({ type: CLEAR_RESUME });

    history.push(paths.dashboard);
  } catch (error) {
    console.error("add collection resume error", error);
  }
};

export const getResumeFromDatabase = (collectionName) => async (dispatch) => {
  try {
    const result = await db.collection(collectionName).get();
    const formatResult = result.docs.map((doc) => ({
      ...doc.data(),
      employmentHistory: [...doc.data().employmentHistory].map((el) => ({
        ...el,
        end: el.end.toDate(),
        start: el.start.toDate(),
      })),
      educations: [...doc.data().educations].map((el) => ({
        ...el,
        end: el.end.toDate(),
        start: el.start.toDate(),
      })),
      id: doc.id,
    }));

    dispatch(getResume(formatResult));
  } catch (error) {
    console.error("read collection resume error", error);
  }
};

export const deleteResumeFromDatabase = (
  collectionName,
  collectionId
) => async (dispatch) => {
  try {
    await db.collection(collectionName).doc(collectionId).delete();
    dispatch(deleteResume(collectionId));
  } catch (error) {
    console.error("delete collection resume error", error);
  }
};

export const updateResumeFromDatabase = (
  collectionName,
  collectionId,
  data
) => async (dispatch) => {
  try {
    await db.collection(collectionName).doc(collectionId).update(data);
    // dispatch(editResume(collectionId));
  } catch (error) {
    console.error("delete collection resume error", error);
  }
};
