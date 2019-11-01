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
            console.log('task details', this.props.taskDetails);
            arr.push(JSON.parse(JSON.stringify(this.props.taskDetails)));
            console.log('arr', arr);


            return (
                <ul>
                    {arr.map((task) => {
                        return (
                            <li key={task.id}>
                                <div className='row'>
                                    <div className='col'>
                                        <p id={'task' + task.id}>{task.id}{' '}{task.state}</p>
                                    </div>
                                    <div className="col">
                                        <button id={'done' + task.id} onClick={this.done}>Done</button>
                                        <button id={'delete' + task.id} onClick={this.delete}>Delete</button>
                                    </div>


                                </div>

                            </li>
                        )

                    })}
                </ul>
            )

        }
    }

    done = (e) => {
        console.log('done', e.target.id);

    }

    delete = (e) => {
        console.log('delete', e.target.id);

    }

    componentDidUpdate(props, state) {
        let done = document.getElementById('done');
        console.log('done element', done);

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
    console.log('state in map state', state);

    return {
        taskDetails: state
    }
}

export default connect(mapStateToProps)(List)
