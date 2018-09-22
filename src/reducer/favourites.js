import ActionTypes from '../actions/actionRegistry';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_FAVOURITES:
            return [ ...state, action.repo ];
        case ActionTypes.REMOVE_FAVOURITE:
            return state.filter(repo => {
                if(repo.id !== action.id) {
                    return repo;
                }
            });
        default:
            return state;
    }
}