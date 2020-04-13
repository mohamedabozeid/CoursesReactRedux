import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  changeHandler = (event) => {
    this.setState({
      course: { ...this.state.course, title: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Courses</h1>
          <h4>Add Course:</h4>
          <input
            onChange={this.changeHandler}
            value={this.state.course.title}
          />
          <button type="submit">Add</button>
        </form>

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = function (state) {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
