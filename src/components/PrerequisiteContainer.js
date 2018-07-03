import React, {Component} from 'react';
import classnames from 'classnames';
import Prerequisite from './Prerequisite';

class PrerequisiteContainer extends Component {
    render() {

        const prerequisiteClasses = classnames({
            'prerequisite-container': true,
            [`prerequisite-container-${this.props.role}`]: true
        });

        return (
            <div className={prerequisiteClasses}>
                {this.props.prerequisites.map(
                    (prereq) => (
                        <Prerequisite {...prereq}/>
                    )
                )
                }
            </div>
        );
    }
}

export default PrerequisiteContainer;
