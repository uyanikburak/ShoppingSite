const initialState = {
    itemCount: 0
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                itemCount: state.quantity+1
            }
        case 'DELETE_ITEM':
            return{
                itemCount : state.quantity-1
            }
        case 'DELETE_ALL':
            return{
                itemCount : 0
            }
        default:
            return state;
    }
}

export default cardReducer