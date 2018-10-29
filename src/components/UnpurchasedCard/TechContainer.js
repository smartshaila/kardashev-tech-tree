import React, {Component} from 'react';

class TechContainer extends Component {
    render() {

        return (
            <div className="tech" id={this.props.id}>
                <div className="title">
                    {this.props.level} - {this.props.title}
                </div>
                <div className="description">
                    {this.props.description}
                </div>
                {techContainers}
                <div className="costs">
                    {this.props.costs.map((c) => (
                        <i className={c.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default UnpurchasedCard;
