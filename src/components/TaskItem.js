import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
  }

  onUpdateStatus() {
    this.props.onUpdateStatus(this.props.task.id);
  }

  render() {
    const { task, index } = this.props;
    return (
      <div className="Task" key={task.id} onClick={this.onUpdateStatus}>
        <p>{`${index}. \u00A0 ${task.descTask}`}</p>
      </div>
    );
  }
}

export default TaskItem;
