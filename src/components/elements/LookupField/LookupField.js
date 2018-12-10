import React from 'react';
import PropTypes from 'prop-types';
import './LookupField.css';

/**
 * LookupField could easily as well just be a functional component - did it as a component to have a few more data points for you.
 *
 */

class LookupField extends React.PureComponent {

    //PropTypes
    static propTypes = {
        submitHandler: PropTypes.func.isRequired,
        children: PropTypes.node,
        defaultValue: PropTypes.string
    };

    static defaultProps = {
        children: null,
        defaultValue: ''
    };

    render() {

        const {children, submitHandler, defaultValue} = this.props;

        return (
            <form className="form-inline" action="http://localhost:3000" method="get" onSubmit={submitHandler}>
                {children}
                <div className="form-group">
                    <input type="text" className="form-control" name="city" placeholder="City"
                           defaultValue={defaultValue}/>
                </div>
                <input type="submit" className="btn btn-default"/>
            </form>
        )
    }
}

export default LookupField;
