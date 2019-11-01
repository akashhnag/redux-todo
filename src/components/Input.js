import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import taskAction from '../actions/taskAction';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            buttonDisable: true

        }


    }
    enterData = (e) => {

        this.setState({
            task: e.target.value,
            buttonDisable: false
        })


    }

    clicked = (e) => {

        this.props.taskAction(this.state.task);
        this.setState({
            task: '',
            buttonDisable: true
        })



    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.clicked();
        }

    }

    render() {
        return (
            <div>
                Enter Task:<input onChange={this.enterData} id='input-box'
                    value={this.state.task} onKeyUp={this.keyPress}></input>
                <button onClick={this.clicked} disabled={this.state.buttonDisable}>Add</button>
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
