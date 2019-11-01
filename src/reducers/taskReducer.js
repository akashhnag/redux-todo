let initialState = {
    id: 0,
    state: ''
}
export default function taskReducer(state = initialState, action) {
    console.log('action in reducer', action);


    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, id: state.id + 1, state: action.payload };

        // default:
        //     return { state };
    }



}
