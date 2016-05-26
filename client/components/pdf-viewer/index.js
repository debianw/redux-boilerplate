/**
 *
 */

import React, { Component } from 'react';
import Modal from '../modal';
import Viewer from './viewer';
import styles from './viewer.css';

class PDFViewer extends Component {

  /**
   *
   */

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      numpages: 0
    }
  }

  /**
   *
   */

  next() {
    const state = this.state;
    const page = this.state.page + 1;

    this.setState({
      ...state,
      page
    });
  }

  /**
   *
   */

  prev() {
    const state = this.state;
    const page = this.state.page - 1;

    this.setState({
      ...state,
      page
    });
  }

  download() {
    const { file } = this.props;

    window.open(file);
  }

  /**
   *
   */

  getControls() {
    const { numpages, page } = this.state;
    const { onDone, onCancel } = this.props;

    return (
      <div>
        <button className="btn btn-default" disabled={page <= 1} onClick={this.prev.bind(this)}> Prev </button>
        <button className="btn btn-default" disabled={page >= numpages} onClick={this.next.bind(this)}> Next </button>

        <span> Pages: {page} of {numpages} </span>

        <button className="btn btn-primary pull-right" onClick={onDone}> Done </button>

        <button className="btn btn-danger pull-right" onClick={onCancel}> Cancel </button>

        <button className="btn btn-default pull-right" onClick={this.download.bind(this)}>
          <span className="glyphicon glyphicon-cloud-download" aria-hidden="true"></span>
        </button>

      </div>
    );
  }

  /**
   *
   */

  onDocumentComplete(numpages) {
    const state = this.state;

    this.setState({
      ...state,
      numpages
    });
  }

  /**
   *
   */

  render() {
    const { page } = this.state;
    const { file } = this.props;

    return (
      <Modal
        title="PDF Document"
        width={720}
        controls={this.getControls()}>

        <Viewer
          page={page}
          onDocumentComplete={this.onDocumentComplete.bind(this)}
          file={file} />

      </Modal>
    );
  }

}

//
export default PDFViewer;
