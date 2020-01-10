import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as AuthorApi from '../../../api/authorApi';

function CourseList(props) {
    const getLink = (slug) => `/course/${slug}`;

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorApi.getAuthors().then(_authors => {
            setAuthors(_authors);
        });
    }, [props.courses]);

    const getAuthor = (authorId) => authors.find(x => x.id === authorId)?.name;

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
                            <td>{getAuthor(course.authorId)}</td>
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