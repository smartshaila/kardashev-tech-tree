import React, {Component} from 'react';
import classnames from 'classnames';

class Prerequisite extends Component {
    render() {
        const prerequisiteClasses = classnames({
            prerequisite: true,
            [this.props.tech_line]: true,
        // [`${this.props.name}-${this.props.tech_line}`]: true
        });
        return (
            <div className={prerequisiteClasses}>
                {this.props.name}
            </div>
        );
    }
}

export default Prerequisite;
