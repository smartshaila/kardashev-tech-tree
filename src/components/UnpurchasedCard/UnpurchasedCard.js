import React, {Component} from 'react';
import TechContainer from './TechContainer';

class UnpurchasedCard extends Component {
    render() {
        const prerequisites = this.props.requires.length > 0 ? <TechContainer tech={this.props.requires} type="prereq" /> : null;
        const negates = this.props.excludes.length > 0 ? <TechContainer tech={this.props.excludes} type="negate" /> : null;
        const techContainers = prerequisites !== null || negates !== null ? <div className="tech-containers">{prerequisites}{negates}</div> : null;
        return (
            <div className="card unpurchased" id={this.props.id}>
                <div className="title">
                    {this.props.level} - {this.props.name}
                </div>
                <div className="description">
                    {this.props.unpurchased_desc}
                </div>
                {techContainers}
                <div className="costs">
                    {this.props.cost.map((c) => (
                        <i className={c} />
                    ))}
                </div>
            </div>
        );
    }
}

export default UnpurchasedCard;
