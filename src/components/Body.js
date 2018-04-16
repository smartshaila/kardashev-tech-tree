import React, {Component} from 'react';
import classnames from 'classnames';

class Body extends Component {
    render() {
        const bodyClasses = classnames({
            body: true
        });

        const techLineClasses = classnames({
            'tech-icon': true,
            [this.props.tech_line]: true
        });

        const techAction = classnames({
            'tech-action': true,
            'tech-action-icon': this.props.tech_action
        });

        return (
            <div className={bodyClasses}>
                <div className={techLineClasses} />
                <div className={techAction}/>
                <div className='description' dangerouslySetInnerHTML={{__html: this.props.description}} />
                <div className='separator' />
                <div className='flavor-text'>{this.props.flavor_text}</div>
            </div>
        );
    }
}

export default Body;
