/**
 *
 */

import React, { Component } from 'react';
import Toolbar from '../../components/toolbar';
import classnames from 'classnames';
import styles from './documents-search.css';

/**
 *
 */

class DocumentsSearch extends Component {

  /**
   *
   */

  render() {
    return (
      <div className={styles.root}>
        <Toolbar title="Search Documents" back="/dashboard" />

        <form className={classnames("form-horizontal", styles.searchForm)}>

          <div className={styles.searchFormRow}>
            <div><label for="address" className="control-label"> Find by Address </label></div>
            <div>
              <input type="text" className="form-control" id="address" placeHolder="Find By Address" />
            </div>

            <div>
              <button type="button" className="btn btn-primary">Find</button>
            </div>
          </div>

          <div className={styles.searchFormRow}>
            <div><label for="fileNumber" className="control-label"> Find by File # </label></div>
            <div>
              <input type="text" className="form-control" id="fileNumber" placeHolder="Find By File #" />
            </div>

            <div>
              <button type="button" className="btn btn-primary">Find</button>
            </div>
          </div>

        </form>
      </div>
    );
  }

}

//
export default DocumentsSearch;
