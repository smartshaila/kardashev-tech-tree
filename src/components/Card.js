import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import CostContainer from './CostContainer';
import PrerequisiteContainer from './PrerequisiteContainer';


class Card extends Component {
    render() {
        const prerequisiteContainer = this.props.prerequisites.length > 0 ? <PrerequisiteContainer prerequisites={this.props.prerequisites}/> : null;
        return (
            <div className="card" id={this.props.id}>
                <Header role={this.props.role} title={this.props.title} level={this.props.level} />
                <Body description={this.props.description} flavor_text={this.props.flavor_text} tech_action={this.props.tech_action} tech_line={this.props.tech_line} flip_tech={this.props.flip_tech}/>
                <CostContainer costs={this.props.costs}/>
                {prerequisiteContainer}
            </div>
        );
    }
}

export default Card;
