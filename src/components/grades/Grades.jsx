import React from 'react';
import './Grades.styles.css';

const Grades = ({ allgrades }) => {
	return (
    	<div className="grades-styles">
          <span>
            Test1: {allgrades[0]}% <br/>
            Test2: {allgrades[1]}% <br/>
            Test3: {allgrades[2]}% <br/>
            Test4: {allgrades[3]}% <br/>
            Test5: {allgrades[4]}% <br/>
            Test6: {allgrades[5]}% <br/>
            Test7: {allgrades[6]}% <br/>
            Test8: {allgrades[7]}%
          </span>
        </div>
	);
}

export default Grades;