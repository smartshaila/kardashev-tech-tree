import React, {Component} from 'react';
import Prerequisite from './Prerequisite';

class PrerequisiteContainer extends Component {
    render() {
        return (
            <div className='prerequisite-container'>
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
