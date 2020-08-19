import React, { useState } from 'react';
import Grades from '../grades/Grades';
import TagInput from '../tag-input/TagInput';
import AverageGrades from '../calculation/AverageGrades';
import './Student.styles.css';

function Student(props){
  const { id, firstName, lastName, email, company, skill, grades } = props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="student-display">
        <div className="student-img-style">
          <img alt='student-img' src={`https://robohash.org/${id}?50x50`} />
        </div>
        <div className="info-container">
          <h1>{firstName} {lastName}</h1>
          <span>
            Email: {email} <br/>
            Company: {company} <br/>
            Skill: {skill} <br/>
            Average: {AverageGrades(grades)}%
          </span>
        </div>
        <div className="expand-btn" onClick={() => setOpen(!open)}>
          { 
            open ? <div className="expand-btn-inner-open"></div> : <div className="expand-btn-inner-close"></div>
          }
        </div>
      </div>
      <div>
      {
        open ?
        <div> 
          <Grades className="expand-area" allgrades={grades} /> 
          <TagInput id={id} />
        </div>
        : null
      }
      </div>
    </div>
  );
}

export default Student;