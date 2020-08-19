import React from 'react';
import Student from '../student/Student';
import './StudentList.styles.css';

const StudentList = ({ studentsinfo }) => {
  return (
    <div>
      {
        studentsinfo.map((student, i) => {
          return (
            <div>
              <Student
                key={i}
                id={studentsinfo[i].id}
                firstName={studentsinfo[i].firstName}
                lastName={studentsinfo[i].lastName}
                email={studentsinfo[i].email}
                company={studentsinfo[i].company}
                skill={studentsinfo[i].skill}
                grades={studentsinfo[i].grades}
                tags={studentsinfo[i].tags}
                />
              <hr/> 
            </div>
          );
        })
      }
    </div>
  );
}

export default StudentList;