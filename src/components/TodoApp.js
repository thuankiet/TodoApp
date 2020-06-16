import React, { Component } from "react";
import shortId from "shortid";
import "./Todo.css";
import Picture from "./Picture";
import Content from "./Content";
import ModalContent from "./ModalContent";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onToggle: 0,
      tasks: []
    };
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onToggleTask = this.onToggleTask.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
  }

  onToggleModal() {
    if (this.state.onToggle === 0 || this.state.onToggle === 1) {
      this.setState(state => ({
        onToggle: 2
      }));
    } else {
      this.setState(state => ({
        onToggle: 0
      }));
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState(state => ({
        tasks: tasks
      }));
    }
  }

  onToggleTask() {
    if (this.state.onToggle === 0 || this.state.onToggle === 2) {
      this.setState(state => ({
        onToggle: 1
      }));
    } else {
      this.setState(state => ({
        onToggle: 0
      }));
    }
  }

  onCloseModal() {
    this.setState(state => ({
      onToggle: 0
    }));
  }

  onChange(event) {
    let target = event.target;
    let upcomingTask = target.upcomingTask;
    let value = target.value;
    this.setState(state => ({
      ...this.state,
      [upcomingTask]: value
    }));
  }

  onSubmit(data) {
    let { tasks } = this.state;
    let task = {
      id: shortId.generate(),
      descTask: data.descTask,
      status: data.status
    };
    tasks.push(task);
    this.setState(state => ({
      ...this.state,
      tasks: tasks,
      onToggle: 1
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  onUpdateStatus(id) {
    const { tasks } = this.state;
    tasks.find(task => {
      if (id === task.id) {
        task.status = !task.status;
        this.setState(state => ({
          ...this.state,
          tasks: tasks
        }));
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
  }

  render() {
    return (
      <div className="Todo">
        <div className="IconBar">
          <img
            src="https://res.cloudinary.com/dpy2iegdk/image/upload/v1591793977/more_jmvom5.png"
            className="Connect"
            alt="connect"
          />
          <img
            src="https://res.cloudinary.com/dpy2iegdk/image/upload/v1591793977/internet_grhjts.png"
            className="Wifi"
            alt="wifi"
          />
          <p className="Time">8:09 PM</p>
          <p className="Percent">94%</p>
          <img
            src="https://res.cloudinary.com/dpy2iegdk/image/upload/v1591793977/battery_frvgpt.png"
            className="Wifi"
            alt="wifi"
          />
        </div>
        <div className="Menu">
          <img
            onClick={this.onToggleTask}
            src="https://res.cloudinary.com/dpy2iegdk/image/upload/v1591794767/open-menu_rai8i9.png"
            className="MenuIcon"
            alt="menu"
          />
          D A I L I S T
        </div>

        {this.state.onToggle === 0 && <Picture />}

        {this.state.onToggle === 1 && (
          <Content
            tasks={this.state.tasks}
            onUpdateStatus={this.onUpdateStatus}
          />
        )}

        {this.state.onToggle === 2 && (
          <ModalContent
            onCloseModal={this.onCloseModal}
            onSubmit={this.onSubmit}
          />
        )}

        <div className="Button">
          <button onClick={this.onToggleModal}>+</button>
        </div>
      </div>
    );
  }
}

export default Todo;
