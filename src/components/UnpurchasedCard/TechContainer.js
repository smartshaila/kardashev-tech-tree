import React, {Component} from 'react';
import classnames from 'classnames';

class TechContainer extends Component {
    render() {
        const containerClasses = classnames({
            'tech': true,
            [`${this.props.type}`]: true,
        });
        return (
            <div className={containerClasses} id={this.props.id}>
                <div className="typeLabel">
                    {this.props.type === 'prereq' ? (this.props.tech.length > 1 ? 'Requires One' : 'Requires') : 'Negates'}
                </div>
                <div className="tech-list">
                    {this.props.tech.map((t) => (<p>{t}</p>))}
                </div>
            </div>
        );
    }
}

export default TechContainer;
