import React, { Component } from "react";
import classNames from "classnames";
import TaskItem from "./TaskItem";
import FinishedItem from "./FinishedItem";

class Content extends Component {
  render() {
    const { tasks } = this.props;
    const UpcomingTask = tasks.filter(task => task.status === false);
    const FinishedTask = tasks.filter(task => task.status === true);
    return (
      <div className="Content">
        <div className="Upcoming">
          <p className="Title"> UPCOMING</p>
          <div
            className={classNames("UpcomingContent", {
              overFlow: UpcomingTask.length > 5
            })}
          >
            {tasks.map((task, index) => {
              if (task.status === false) {
                return (
                  <TaskItem
                    key={index}
                    task={task}
                    index={index + 1}
                    onUpdateStatus={this.props.onUpdateStatus}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="Finished">
          <p className="Title"> FINISHED</p>
          <div
            className={classNames("FinishedContent", {
              overFlow: FinishedTask.length > 2
            })}
          >
            {tasks.map((task, index) => {
              if (task.status === true) {
                return (
                  <FinishedItem key={index} task={task} index={index + 1} />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
