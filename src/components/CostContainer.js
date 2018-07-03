import React, {Component} from 'react';
import classnames from 'classnames';
import Cost from './Cost';

class CostContainer extends Component {
    render() {

        const containerClasses = classnames({
            'cost-container': true,
            [`cost-container-${this.props.role}`]: true
        });

        return (
            <div className={containerClasses}>
                {this.props.costs.map(
                    (cost) => (
                        <Cost {...cost}/>
                    )
                )
                }
            </div>
        );
    }
}

export default CostContainer;
