import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import { addTodo, sortTodo } from './redux/actions';

class App extends Component {
  state = {
    text: '',
    clicks: 0,
    showModal: false,
    name: null,
    protocol: null,
    port: null,
    rule: null,
    status: null,
    groups: null,
    list: [],
  };

  onChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { addItem } = this.props;
    const { name, protocol, port, rule, status, groups } = this.state;
    addItem({ name, protocol, port, rule, status, groups });
    this.toggleModal();
  };

  sortList = () => {
    this.list = this.props.items;
    const sortByKey = key => (a, b) => a[key] > b[key];
    this.list = this.list.sort(sortByKey('name'))
  };

  renderModal = () => (
    <Modal>
      <div className="ui dimmer modals page transition visible active">
        <div className='ui fullscreen modal transition visible acitve'>
          <div className="content">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Name" name="name"  onChange={this.onChange} />
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Protocol</label>
                  <input type="text" placeholder="Protocol" name="protocol"  onChange={this.onChange} /></div>
                <div className="field">
                  <label>Port</label>
                  <input type="text" placeholder="Port" name="port"  onChange={this.onChange} /></div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Rule</label>
                  <input type="text" placeholder="Rule" name="rule"  onChange={this.onChange} /></div>
                <div className="field">
                  <label>Status</label>
                  <input type="text" placeholder="Status" name="status"  onChange={this.onChange} /></div>
              </div>
              <div className="field">
                <label>Attached Groups</label>
                <input type="text" placeholder="Attached Groups" name="groups"  onChange={this.onChange} />
              </div>
              <button className="ui button">Cancel</button>
              <button className="ui button" type="submit">Submit</button>
            </form>
          </div>
        </div></div>
    </Modal >
  );

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  };

  render() {

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
              <button className="ui blue button" onClick={this.toggleModal}>Add new</button>
            </div>
          </div>
        </div>

        <table className="ui striped sortable celled table">
          <thead>
            <tr>
              <th onClick={() => {}}>Name</th>
              <th>Protocol</th>
              <th>Port</th>
              <th>Rule</th>
              <th>Attached Groups</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map(item =>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.protocol}</td>
                  <td>{item.port}</td>
                  <td>{item.rule}</td>
                  <td>{item.status}</td>
                  <td>{item.groups}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        {!!this.state.showModal && this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: payload => dispatch(addTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
