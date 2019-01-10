import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const dataList = [
  { text: "Apple", id: 1 },
  { text: "Banana", id: 2 },
  { text: "Orange", id: 3 }
];
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
          text: this.state.inputText,
          id: Math.floor(Math.random() * 8000),
          completed: false
        }
      ],
      inputText: ""
    });
  };

  strikeThroughHandler = id => {
    let data = [...this.state.data];
    data = data.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log(todo);
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ data });
  };

  selectAll = () => {
    let data = [...this.state.data];
    data = data.map(todo => {
      return (todo.completed = true);
    });
    this.setState(data);
  };

  deleteTodo = () => {
    const filterData = this.state.data.filter(x => x.completed !== true);
    this.setState({
      data: filterData
    });
  };

  render() {
    const { data, inputText } = this.state;
    return (
      <div>
        <TodoForm
          inputText={inputText}
          submitHandler={this.submitHandler}
          onChangeHandler={this.onChangeHandler}
          deleteTodo={this.deleteTodo}
          selectAll={this.selectAll}
        />
        <TodoList
          data={data}
          strikeThroughHandler={this.strikeThroughHandler}
        />
      </div>
    );
  }
}

export default App;
