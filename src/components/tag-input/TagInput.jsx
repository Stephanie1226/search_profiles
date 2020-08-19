import React, { useState } from 'react';
import './TagInput.styles.css';

import { connect } from 'react-redux';
import { updateStudentsData } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    updatedStudents: state.updateStudentsData.updatedStudents
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateStudents: (data) => dispatch(updateStudentsData(data))
  }
}

const TagInput = ({ id, updatedStudents, onUpdateStudents }) =>  {
	const [tagValue, setTagValue] = useState("");
	const [tagList, setTagList] = useState([]);
  const handleChange = (e) => {
    setTagValue(e.target.value);
  }
  const keyPress = (e) => {
    if(e.keyCode === 13 && e.target.value !== ""){
    	updatedStudents[id-1].tags.push(e.target.value);
    	onUpdateStudents(updatedStudents);
      setTagList([e.target.value, ...tagList]);
      setTagValue("");
    }
  } 

	return (
		<div className="tags">
			<div className="tags-container">
		  	{tagList.map((item) => <div className="tag-style"><span>#{item}</span></div>)}
		  </div>
			<input 
				className="add-tag-input"
				value={tagValue} 
				onKeyDown={(e) => keyPress(e)} 
				onChange={(e) => handleChange(e)} 
				placeholder="Add a tag" />
		</div>
	);

}

export default connect(mapStateToProps, mapDispatchToProps)(TagInput);