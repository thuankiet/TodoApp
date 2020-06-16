import React, { Component } from "react";

class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descTask: "",
      status: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { onCloseModal } = this.props;
    return (
      <div className="ModalContent">
        <form className="Modal" onSubmit={this.onHandleSubmit}>
          <div className="Label">
            <p>New Task</p>
            <button onClick={onCloseModal}>x</button>
          </div>
          <div className="InputField">
            <input type="text" name="descTask" onChange={this.onHandleChange} />
          </div>
          <div className="AddButton">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalContent;
