import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import taskAction from '../actions/taskAction';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',

        }


    }
    enterData = (e) => {

        this.setState({
            task: e.target.value
        })
    }

    clicked = () => {

        this.props.taskAction(this.state.task);


    }

    render() {
        return (
            <div>
                Enter Task:<input onChange={this.enterData} id='input-box'></input>
                <button onClick={this.clicked}>Add</button>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         task: state.task
//     }
// }
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        taskAction: taskAction
    }, dispatch)
}

export default connect(null, matchDispatchToProps)(Input)
