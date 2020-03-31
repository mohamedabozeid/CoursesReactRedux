import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  changeHandler = event => {
    this.setState({
      course: { ...this.state.course, title: event.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Courses</h1>
        <h4>Add Course:</h4>
        <input onChange={this.changeHandler} value={this.state.course.title} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default CoursesPage;
