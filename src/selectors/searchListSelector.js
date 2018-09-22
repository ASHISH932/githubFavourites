export default (searchList, favourites) => {
    return searchList.map(sl => {
        const exist = favourites.find( repo => repo.id === sl.id );
        if(exist) {
            return { ...sl, exist: true }
        } else {
            return { ...sl, exist: false }
        }
    })
}