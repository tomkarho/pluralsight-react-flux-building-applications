import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function CourseList(props) {
    const getLink = (slug) => `/course/${slug}`;

    return (
        <>
            <table className='table'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author Id</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {props.courses.map(course => {
                    return (
                        <tr key={course.id}>
                            <td><Link to={getLink(course.slug)}>{course.title}</Link></td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

// This is for development: serves as a validation schema
CourseList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    })).isRequired
};

export default CourseList;