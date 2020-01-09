import React from "react";

function CoursePage(props) {
    return (
        <>
            <h3>Course</h3>
            {props.match.params.slug}
        </>
    );
}

export default CoursePage;