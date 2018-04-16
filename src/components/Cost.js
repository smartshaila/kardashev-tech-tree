import React, {Component} from 'react';
import classnames from 'classnames';

class Cost extends Component {
    render() {
        const costClasses = classnames({
            cost: true,
            [`${this.props.resource_type}-${this.props.amount}`]: true
        });
        return (
            <div className={costClasses} />
        );
    }
}

export default Cost;
