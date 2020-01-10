import React, { useState, useEffect } from "react";
import CourseForm from "./courses/CourseForm";
import * as CourseApi from '../../api/courseApi';
import  {toast} from 'react-toastify';

function CoursePage(props) {
    const [errors, setErrors] = useState({});

    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });

    useEffect(() => {
        const slug = props.match.params.slug;

        if(slug) {
            CourseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
        }
        
    }, [props.match.params.slug]);

    function handleChange({ target }) {
        // square brackets are not array: this is called computed property
        // which means that we can set a property based on a variable
        // so should course object have a property that matches what is set
        // in event.target.name attribute (in this case input name), it automatically
        // sets it for the course.  For example input name="title" would bind to courses title field
        setCourse({...course, [target.name]: target.value});
    }

    function formIsValid() {
        const _errors = {};

        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author is required";
        if(!course.category) _errors.category = "Category is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(!formIsValid()) return;

        CourseApi.saveCourse(course)
        .then(() => {
            props.history.push('/courses');
            toast.success('Course saved');
        })
        .catch(function(error){
            
        });
    }

    return (
        <>
            <h3>{course.title}</h3>
            <CourseForm 
            errors={errors}
            onSubmit={handleSubmit}
            course={course} 
            onChange={handleChange} />
        </>
    );
}

export default CoursePage;