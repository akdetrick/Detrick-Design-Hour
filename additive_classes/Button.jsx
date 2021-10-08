import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';

const Button = ({
    type = 'primary',
    label = 'Submit',
    isFullWidth = false,
    ...otherProps
}) => (
    <button
        className={cc([
            'button',
            `button--${type}`,
            {
                'button--fullWidth': isFulllWidth,
                'button--magic': isOpen,
            }
        ])}
        {...otherProps}
    >
        {label}
    </button>
);

Button.propTypes = {

    /** The type of button to render */
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,

    /** Text to render inside the button */
    label: PropTypes.string.isRequired,

    /** When `true`, this prop makes the button fill the width of its parent container */
    isFullWidth: PropTypes.bool,
};

export default Button;