import React, { Component } from "react";
import axios from "axios";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isNewTask: false,
      userid: "",
      taskTitle: "",
      isPublished: null,
      userError: "",
      titleError: "",
      completeError: "",
    };
  }

  getUnique = (arr, index) => {
    const unique = arr
      .map((e) => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };

  componentDidMount = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const data = res.data;
        const getUniqueData = this.getUnique(data, "userId");
        this.setState({
          task: getUniqueData,
        });
      })
      .catch((err) => console.log(err));
  };

  handleClick = (userId) => {
    this.setState((ps) => ({
      task: ps.task.filter((x) => x.userId !== userId),
    }));
  };

  handleAddTask = () => {
    this.setState({
      isNewTask: true,
      userid: "",
      taskTitle: "",
      isPublished: null,
    });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  taskValidation = (data) => {
    const re = /^[0-9\b]+$/;
    if (
      this.state.userid === "" &&
      this.state.taskTitle === "" &&
      this.state.isPublished === null
    ) {
      this.setState({
        userError: "ID can not be empty!!",
        titleError: "Title can not be empty!!",
        completeError: "Title can not be empty!!",
      });
    } else if (!this.state.userid.match(re)) {
      this.setState({ userError: "Invalid ID" });
    } else if (this.state.taskTitle === "") {
      this.setState({ titleError: "Title can not be empty!!" });
    } else if (this.state.isPublished === null) {
      this.setState({ completeError: "Please Select!!" });
    } else {
      this.setState({
        titleError: "",
        userError: "",
        completeError: "",
      });
      return true;
    }
  };

  handleSubmitTask = async (e) => {
    e.preventDefault();
    const validation = this.taskValidation(this.state);
    if (validation) {
      const x = Number(this.state.userid);
      const found = this.state.task.find((item) => item.userId === x);
      if (found) {
        this.setState({
          userError: "ID already exists",
        });
      } else {
        let newTask = {
          userId: Number(this.state.userid),
          title: this.state.taskTitle,
          id: 1,
          completed: this.state.isPublished,
        };
        await this.setState({
          task: [...this.state.task, newTask],
          isNewTask: false,
        });
      }
    }
  };

  handleRadio = (event) => {
    const isPublished = event.currentTarget.value === "true" ? true : false;
    this.setState({ isPublished });
  };

  render() {
    const { isPublished } = this.state;
    return (
      <div>
        {this.state.isNewTask ? (
          <div>
            <h4>Create Task</h4>
            <form className="new-taskForm" onSubmit={this.handleSubmitTask}>
              <p>Task ID</p>
              <div className="input-field col s6">
                <input
                  type="text"
                  id="userid"
                  name="userid"
                  className=""
                  value={this.state.userid}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
                <label htmlFor="userid" className="">
                  Task ID
                </label>
                <span className="fieldError">{this.state.userError}</span>
              </div>
              <p>Task Title</p>
              <div className="input-field col s6">
                <input
                  type="text"
                  id="taskTitle"
                  name="taskTitle"
                  className=""
                  value={this.state.taskTitle}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
                <label htmlFor="taskTitle" className="">
                  Task Title
                </label>
                <span className="fieldError">{this.state.titleError}</span>
              </div>
              <p>Task Completed</p>
              <div className="input-field col s6">
                <p>
                  <label>
                    <input
                      name="isPublished"
                      value="true"
                      type="radio"
                      checked={isPublished === true}
                      onChange={this.handleRadio}
                    />
                    <span>True</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="isPublished"
                      value="false"
                      type="radio"
                      checked={isPublished === false}
                      onChange={this.handleRadio}
                    />
                    <span>False</span>
                  </label>
                </p>
                <span className="fieldError">{this.state.completeError}</span>
              </div>

              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  type="submit"
                  name="button"
                  className="waves-effect waves-light btn blue addBtn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            {this.state.task.length ? (
              <div>
                <table>
                  <thead>
                    <tr>
                      <td>ID</td>
                      <td>Title</td>
                      <td>Completed</td>
                      <td>Delete</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.task.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{data.userId}</td>
                          <td>{data.title}</td>
                          <td style={{ textTransform: "capitalize" }}>
                            {data.completed.toString()}
                          </td>
                          <td>
                            <button
                              className="waves-effect waves-light btn red"
                              onClick={() => this.handleClick(data.userId)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>No Task Available</div>
            )}
            <button
              className="waves-effect waves-light btn blue addBtn"
              onClick={this.handleAddTask}
            >
              Add Task
            </button>
          </div>
        )}
      </div>
    );
  }
}
