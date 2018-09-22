import ActionTypes from './actionRegistry';

export const addToFavourites = repo => ({
    type: ActionTypes.ADD_TO_FAVOURITES,
    repo,
});

export const removeFavourite = id => ({
    type: ActionTypes.REMOVE_FAVOURITE,
    id,
});