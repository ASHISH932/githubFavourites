import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import RepoList from './repoList';
import Search from './search';

import { startSearch, updateSearchList } from "../actions/searchList";
import { addToFavourites, removeFavourite } from "../actions/favourites";
import searchListSelector from '../selectors/searchListSelector';

export const MainPage = (props) => {
    const { classes, favourites, searchList } = props;
    return (
        <div>
            <div className={classes.header}>
                <h1>My Github Favourites</h1>
            </div>
            <div className={classes.main}>
                <div className={classes.center}>
                    <Search onSearch={item => props.startSearch(item)} onInputCleared={() => props.updateSearchList()}/>
                    <div className={classes.gap}/>
                    <RepoList data={searchList} button="Add" onClick={repo => props.addToFavourites(repo)}/>
                </div>
                <div className={classes.list}>
                    <div className={classes.center}>
                        <RepoList data={favourites} button="Remove" onClick={repo => props.removeFavourite(repo.id)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    header: {
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#651FFF',
        color: 'white'
    },
    main: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '85%',
        lineHeight: '25px',
        fontFamily: 'Helvetica, Arial, Lucida Grande, sans-serif',
    },
    list: {
        backgroundColor: '#EEE',
    },
    center: {
        width: '95%',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '0%',
    },
    gap: {
        height: '5%',
    }
};

const mapStateToProps = ({ searchList, favourites }) => ({
    favourites,
    searchList: searchListSelector(searchList, favourites),
});

const mapDispatchToProps = dispatch => ({
    startSearch: item => dispatch(startSearch(item)),
    updateSearchList: () => dispatch(updateSearchList([])),
    addToFavourites: repo => dispatch(addToFavourites(repo)),
    removeFavourite: id => dispatch(removeFavourite(id))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectSheet(styles),
)(MainPage);