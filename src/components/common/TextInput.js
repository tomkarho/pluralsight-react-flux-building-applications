import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
    let wrapperClass = 'form-group';

    if(props.error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                {/* having the name attribute match the property allows simpler binding and change handling */}
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    className="form-control"
                    onChange={props.onChange}
                    value={props.value}
                />
            </div>
            {props.error && <div class="alert alert-danger">{props.error}</div>}
        </div>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

TextInput.defaultProps = {
    error: ''
};

export default TextInput;