import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import { addTodo, sortTodo } from './actions';

class App extends Component {
  state = {
    text: '',
    clicks: 0,
    showModal: false
  };

  name = null;
  protocol = null;
  port = null;
  rule = null;
  status = null;
  groups = null;  // keep them in state, don't worry about rerendering
  list = [];

  onAddNew = () => {
    this.setState({ showModal: true });
  }

  onIncrementClicks = () => {
    this.setState({ showModal: false });
  }

  onInputChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addItem({
      name: this.name.value,
      protocol: this.protocol.value,
      port: this.port.value,
      rule: this.rule.value,
      status: this.status.value,
      groups: this.groups.value
    });
    this.onIncrementClicks();
  }

  sortList = () => {
    this.list = this.props.items;
    const sortByKey = key => (a, b) => a[key] > b[key]
    this.list = this.list.sort(sortByKey('name'))
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="ui dimmer modals page transition visible active">
          <div className='ui fullscreen modal transition visible acitve'>
            <div className="content">
              <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label>Name</label>
                  <input type="text" placeholder="Name" ref={node => this.name = node} />
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Protocol</label>
                    <input type="text" placeholder="Protocol" ref={node => this.protocol = node} /></div>
                  <div className="field">
                    <label>Port</label>
                    <input type="text" placeholder="Port" ref={node => this.port = node} /></div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Rule</label>
                    <input type="text" placeholder="Rule" ref={node => this.rule = node} /></div>
                  <div className="field">
                    <label>Status</label>
                    <input type="text" placeholder="Status" ref={node => this.status = node} /></div>
                </div>
                <div className="field">
                  <label>Attached Groups</label>
                  <input type="text" placeholder="Attached Groups" ref={node => this.groups = node} />
                </div>
                <button className="ui button">Cancel</button>
                <button className="ui button" type="submit">Submit</button>
              </form>
            </div>
          </div></div>
      </Modal >) : null;

    const items = this.list.map(item =>
      <tr>
        <td>{item.name}</td>
        <td>{item.protocol}</td>
        <td>{item.port}</td>
        <td>{item.rule}</td>
        <td>{item.status}</td>
        <td>{item.groups}</td>
      </tr>
    );

    return (
      <div className="ui container teal segment">
        <div className="ui grid equal width">
          <div className="row">
            <div className="ui search left floated column">
              <div className="ui icon input">
                <input type="text" placeholder="Search" />
                <i className="search icon" />
              </div></div>
            <div className="right floated column right aligned">
              <div className="ui horizontal large list">
                <i className="download icon item" />
                <i className="pencil alternate icon item" />
                <i className="cog icon item" />
              </div>
              <button className="ui blue button" onClick={this.onAddNew}>Add new</button>
            </div>
          </div>
        </div>

        <table className="ui striped sortable celled table">
          <thead>
            <tr>
              <th onClick={this.props.sortList}>Name</th>
              <th>Protocol</th>
              <th>Port</th>
              <th>Rule</th>
              <th>Attached Groups</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
        {modal}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.todos
  };
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: payload => dispatch(addTodo(payload)),
    sortItems: () => dispatch(sortTodo())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);