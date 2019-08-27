import React , {Component} from 'react';
class AddTodo extends Component {
    state ={
        Content: ''
    }
    changeinput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addtodos(this.state);
        this.setState({
            Content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label htmlFor="todo">Add New Todo</label>
                    <input type="text" name="Content" onChange={this.changeinput} value={this.state.Content} />
                </form>
            </div>
        )
    }
}
export default AddTodo