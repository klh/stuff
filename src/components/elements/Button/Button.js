import React from 'react';
import PropTypes from 'prop-types';
import {Button as DemoButton} from 'react-bootstrap';
import './Button.css'

/**
 * Button Stateless Element
 *
 * Demo Button Created to show how i would typically structure stateless components
 */

//Functional Component
const Button = React.memo((props) => (
    <DemoButton bsStyle={props.type}>{props.children}</DemoButton>
));

//PropTypes
Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['default', 'primary', 'dashed', 'danger'])
};

// Same approach for defaultProps too
Button.defaultProps = {
    children: 'Default Button Text',
    type: 'primary'
};

//etc

export default Button;
