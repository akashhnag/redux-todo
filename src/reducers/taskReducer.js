let initialState = {
    id: 0,
    task: ''
}
export default function taskReducer(state = initialState, action) {
    console.log('action in reducer', action);


    switch (action.type) {
        case 'ADD_TASK': initialState.id = initialState.id + 1;
            initialState.task = action.payload;
            console.log('state before return', state);

            return { state: initialState };

        // default:
        //     return { state };
    }



}
