export default function taskAction(task) {
    console.log('task in action', task);

    return {
        type: 'ADD_TASK',
        payload: task
    }
}
