import React, { Component } from 'react';
import injectSheet from 'react-jss';

export class Search extends Component {
    state = {
      input: '',
    };
    handleClick = (e) => {
        e.preventDefault();
        const val = this.state.input;
        if (val.length > 0) {
            this.props.onSearch(val);
        }
    };
    handleChange = (e) => {
        const a = e.target.value;
        if(a.length > 0) {
            this.setState({
                input: a
            })
        } else {
            this.props.onInputCleared();
        }
    };
    handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            this.handleClick(e);
        }
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <input type="text" className={classes.text} placeholder="Search" onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
                <input type="button" className={classes.button} value="Search" onClick={this.handleClick}/>
            </div>
        );
    }
}

const styles = {
    main: {
        margin: 'auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '7fr 3fr 1fr',
        gridGap: '10px'
    },
    text: {
        height: 49,
        border: '3px solid #EEE',
        margin: '4px 2px',
        padding: '8px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        fontSize: '16px'
    },
    button: {
        padding: '15px 32px',
        backgroundColor: '#651FFF',
        color: 'white',
        borderRadius: '4px',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
    }
};

export default injectSheet(styles)(Search);