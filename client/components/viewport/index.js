/**
 *
 */

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './viewport.css';

/**
 *
 */

class Viewport extends Component {

  /**
   *
   */

  render() {
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root';

    return (
      <ReactCSSTransitionGroup
        id="viewport"
        className={styles.root}
        component="div"
        transitionName={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          leave: styles.leave,
          leaveActive: styles.leaveActive
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>

        {React.cloneElement(this.props.children, {
          key
        })}

      </ReactCSSTransitionGroup>
    );
  }

}

export default Viewport;
