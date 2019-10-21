import React, { Component } from 'react'
import { connect } from 'react-redux';

let arr = [];
class List extends Component {
    toDisplay = () => {
        if (this.props.taskDetails == undefined) {
            return (
                <div>
                    Nothing added
                </div>
            )
        }
        else {
            arr.push(JSON.parse(JSON.stringify(this.props.taskDetails)));
            console.log(arr);

            return (
                <ul>
                    {arr.map((task) => {
                        return (
                            <li key={task.state.id}>
                                {task.state.id}{' '}
                                {task.state.task}
                            </li>
                        )

                    })}
                </ul>
            )

        }
    }
    render() {
        console.log('props', this.props.taskDetails);
        return (
            <div>
                {this.toDisplay()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log('state in map state', state);

    return {
        taskDetails: state
    }
}

export default connect(mapStateToProps)(List)
