import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          inputValueAdd:""
        }
      }

    handleChangesAdd = (e) => {
        this.setState({
            ...this.state,
            inputValueAdd:e.target.value
        })
    };
    handleClickAdd = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.inputValueAdd);
    };

    render() {
        return (
            <form>
                <input 
                onChange={this.handleChangesAdd}
                type="text" 
                name="item"/>
                <button onClick={this.handleClickAdd}>Add Todo</button>
            </form>
        );
    }
};

export default ToDoForm;