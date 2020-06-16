import React, { Component } from "react";

class FinishedItem extends Component {
  render() {
    const { task, index } = this.props;
    return (
      <div className="Task" key={index}>
        <p>{`${index}. \u00A0 ${task.descTask}`}</p>
      </div>
    );
  }
}

export default FinishedItem;
