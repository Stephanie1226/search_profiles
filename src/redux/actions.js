import { apiCall } from '../api/api'
import {
  CHANGE_SEARCHFIELD,
  CHANGE_SEARCHTAGFIELD,
  REQUEST_STUDENTS_PENDING,
  REQUEST_STUDENTS_SUCCESS,
  REQUEST_STUDENTS_FAILED,
  UPDATE_STUDENTS_DATA,
  FILTERED_STUDENTS_DATA
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const setSearchTagField = (text) => ({ type: CHANGE_SEARCHTAGFIELD, payload: text })

export const requestStudents = () => (dispatch) => {
  dispatch({ type: REQUEST_STUDENTS_PENDING })
  apiCall('https://www.hatchways.io/api/assessment/students')
    .then(data => {
      for (let i = 0; i < data.students.length; i++) {
        data.students[i].tags = []
      }
      dispatch({ type: REQUEST_STUDENTS_SUCCESS, payload: data.students })})
    .catch(error => dispatch({ type: REQUEST_STUDENTS_FAILED, payload: error }))
}

export const updateStudentsData = (data) => ({ type: UPDATE_STUDENTS_DATA, payload: data })

export const filterStudentsData = (data) => ({ type: FILTERED_STUDENTS_DATA, payload: data })
