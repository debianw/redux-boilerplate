/**
 *
 */

import React, { Component } from 'react';
import Toolbar from '../../components/toolbar';
import styles from './documents.css';
import classnames from 'classnames';

/**
 *
 */

class Documents extends Component {

  /**
   *
   */

  render() {
    return (
      <div className={styles.root}>
        <Toolbar title="Documents" />

        <div className={styles.content}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Document</th>
                <th>Date Added</th>
                <th>By</th>
                <th>Notes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Title Search</td>
                <td>5/19/16 4:10 pm</td>
                <td>User Name</td>
                <td>None</td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Commitment</td>
                <td>5/19/16 4:10 pm</td>
                <td>User</td>
                <td>None</td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Other Document</td>
                <td>5/19/16 4:10 pm</td>
                <td>User</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>

          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-primary">No Change</button>
            <button type="button" className="btn btn-primary">Upload Search</button>
            <button type="button" className="btn btn-primary">Create Commitment</button>
            <button type="button" className="btn btn-primary">Send Search</button>
          </div>

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

      </div>
    );
  }

}

//
export default Documents;
