import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const dataList = [{ text: "Apple" }, { text: "Banana" }, { text: "Orange" }];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dataList,
      inputText: ""
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        {
          text: this.state.inputText
        }
      ],
      inputText: ""
    });
  };

  strikeThroughHandler = id => {};

  render() {
    const { data, inputText } = this.state;
    return (
      <div>
        <TodoForm
          inputText={inputText}
          submitHandler={this.submitHandler}
          onChangeHandler={this.onChangeHandler}
          strikeThroughHandler={this.strikeThroughHandler}
        />
        <TodoList data={data} />
        <p>anotehre test</p>
      </div>
    );
  }
}

export default App;
