import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, setSearchTagField, requestStudents, updateStudentsData, filterStudentsData } from '../redux/actions';

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
    updatedStudents: state.updateStudentsData.updatedStudents,
    filteredStudents: state.filterStudentsData.filteredStudents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onSearchTagChange: (event) => dispatch(setSearchTagField(event.target.value)),
    onRequestStudents: () => dispatch(requestStudents()),
    onUpdateStudents: (data) => dispatch(updateStudentsData(data)),
    onFilterStudents: (data) => dispatch(filterStudentsData(data))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestStudents();
    this.props.onUpdateStudents(this.props.students);
  }

  render() {
    const { searchField, searchTagField, students, isPending, updatedStudents, filteredStudents } = this.props;
    const { onSearchChange, onSearchTagChange, onUpdateStudents, onFilterStudents } = this.props;
    const filteredFirstName = updatedStudents.filter(student => {
      return student.firstName.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredLastName = updatedStudents.filter(student => {
      return student.lastName.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredByTag = updatedStudents.filter(student => {
      if (student.tags.length > 0) {
        return student.tags.includes(searchTagField);
      }
    });
    const filteredByName = [...new Set([...filteredFirstName,...filteredLastName])];

    const combined = filteredStudents.concat(filteredByTag);
    let intersection = [];
    let result = {};
    if (filteredStudents !== [] && filteredByTag !== []) {
      combined.forEach(function(item) {
        result[JSON.stringify(item)] = result[JSON.stringify(item)] ? result[JSON.stringify(item)] + 1 : 1;
      });
      for (let [key, value] of Object.entries(result)) {
        if (value > 1) {
          intersection.push(JSON.parse(key));
        };
      };
      console.log(intersection)
    }
    
    if (searchField === '' && searchTagField !== '') {
      onFilterStudents(filteredByTag);
    } else if (searchField !== '' && searchTagField === ''){
      onFilterStudents(filteredByName);
    }
    else {
      onFilterStudents(intersection);
    }

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
