import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, setSearchTagField, requestStudents, updateStudentsData } from '../redux/actions';

import SearchBox from '../components/searchbox/SearchBox';
import Scroll from '../components/scroll/Scroll';
import ErrorBoundry from '../components/error-boundry/ErrorBoundry';
import StudentList from '../components/student-list/StudentList';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchStudents.searchField,
    searchTagField: state.searchTags.searchTagField,
    students: state.requestStudents.students,
    isPending: state.requestStudents.isPending,
    updatedStudents: state.updateStudentsData.updatedStudents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onSearchTagChange: (event) => dispatch(setSearchTagField(event.target.value)),
    onRequestStudents: () => dispatch(requestStudents()),
    onUpdateStudents: (data) => dispatch(updateStudentsData(data))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestStudents();
  }

  render() {
    const { searchField, students, isPending, updatedStudents } = this.props;
    const { onSearchChange, onSearchTagChange, onUpdateStudents } = this.props;
    onUpdateStudents(students);
    const filteredFirstName = updatedStudents.filter(student => {
      return student.firstName.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredLastName = updatedStudents.filter(student => {
      return student.lastName.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredStudents = [...new Set([...filteredFirstName,...filteredLastName])];

    return (
      <div className="tc main-container">
        <SearchBox id="name-input" searchChange={onSearchChange} placeholder={"Search by name"}/>
        <SearchBox id="tag-input" searchChange={onSearchTagChange} placeholder={"Search by tag"}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <StudentList studentsinfo={filteredStudents} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
