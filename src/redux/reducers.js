import {
  CHANGE_SEARCHFIELD,
  CHANGE_SEARCHTAGFIELD,
  REQUEST_STUDENTS_PENDING,
  REQUEST_STUDENTS_SUCCESS,
  REQUEST_STUDENTS_FAILED,
  UPDATE_STUDENTS_DATA
 } from './constants'

const initialStateSearch = {
  searchField: ''
}
export const searchStudents = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateSearchTag = {
  searchTagField: ''
}
export const searchTags = (state=initialStateSearchTag, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHTAGFIELD:
      return Object.assign({}, state, {searchTagField: action.payload})
    default:
      return state
  }
}

const initialStateStudents = {
  students: [],
  isPending: true
}
export const requestStudents = (state=initialStateStudents, action={}) => {
  switch (action.type) {
    case REQUEST_STUDENTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_STUDENTS_SUCCESS:
      return Object.assign({}, state, {students: action.payload, isPending: false})
    case REQUEST_STUDENTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

const initialStateUpdatedStudents = {
  updatedStudents: []
}
export const updateStudentsData = (state=initialStateUpdatedStudents, action={}) => {
  switch (action.type) {
    case UPDATE_STUDENTS_DATA:
      return Object.assign({}, state, {updatedStudents: action.payload})
    default:
      return state
  }
}
