import React from "react";
import TextInput from '../../common/TextInput';
import PropTypes from 'prop-types';

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput 
      id='title' 
      label="Title" 
      value={props.course.title} 
      name='title' 
      error={props.errors.title}
      onChange={props.onChange} 
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ''}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput 
      id='category' 
      label="Category" 
      value={props.course.category} 
      name='category' 
      error={props.errors.category}
      onChange={props.onChange} 
      />

      <button className="btn btn-primary" >Save</button>
    </form>
  );
}

// Think this as an interface
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
