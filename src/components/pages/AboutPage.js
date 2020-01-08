import React from "react";

class AboutPage extends React.Component {
    render() {
        return (
            // Equivalent of <React.Fragment></React.Fragment>
            // What this does is allows multi line html without adding excess html to dom
            // like divs
            <>
                <h2>About</h2>
                <p>Tjos app uses React</p>
            </>
        );
    }
}
export default AboutPage;