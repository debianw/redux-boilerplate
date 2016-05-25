/**
 *
 */

import React, { Component } from 'react';
import Modal from '../modal';
import Viewer from './viewer';

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

  /**
   *
   */

  getControls() {
    const { numpages, page } = this.state;

    return (
      <div>
        <button className="btn btn-default" disabled={page <= 1} onClick={this.prev.bind(this)}> Prev </button>
        <button className="btn btn-default" disabled={page >= numpages} onClick={this.next.bind(this)}> Next </button>

        <span> Pages: {page} of {numpages} </span>

        <button className="btn btn-primary pull-right"> Done </button>
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
      <Modal title="PDF Document" controls={this.getControls()}>

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

/**
 *
 */

/*export default (props) => {

  return (
    <Modal title="PDF Document">

      <Viewer
        page={1}
        file="https://www.verifyd.com/CLServicesDev/Api.ashx?ActiveBid&orderId=1036972" />

      <div>Controls</div>

    </Modal>
  );
}*/
