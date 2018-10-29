import React, {Component} from 'react';
import classnames from 'classnames';

class Header extends Component {
    render() {
        const headerClasses = classnames({
           header: true,
           [this.props.role]: true
        });
        const titleClasses = classnames({
           title: true
        });
        const levelClasses = classnames({
           [`level-${this.props.level}`]: true
        });

        return (
                <div className={headerClasses}>
                    <div className={titleClasses}>{this.props.title}</div>
                    <div className={levelClasses} />
                </div>
        );
    }
}

export default Header;
