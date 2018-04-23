export default (state = [], action) => {
    switch (action.type) {
        case 'LOADING':
            return [{ id: '001', title: 'loading....' }]
        case 'GOT':
            return action.payload
        default:
            return state
    }
}
