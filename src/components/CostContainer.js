import React, {Component} from 'react';
import Cost from './Cost';

class CostContainer extends Component {
    render() {
        return (
            <div className='cost-container'>
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
