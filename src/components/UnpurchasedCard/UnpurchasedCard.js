import React, {Component} from 'react';

class UnpurchasedCard extends Component {
    render() {
        const prerequisites = this.props.prerequisites.length > 0 ? <TechContainer tech={this.props.prerequisites} type="prereq" /> : null;
        const negates = this.props.negation.length > 0 ? <TechContainer tech={this.props.negation} type="negate" /> : null;
        const techContainers = prerequisites !== null || negates !== null ? <div className="tech-containers">{prerequisites}{negates}</div> : null;
        return (
            <div className="card unpurchased" id={this.props.id}>
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
