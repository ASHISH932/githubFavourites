import React, { Component } from 'react';
import injectSheet from 'react-jss';

export class RepoList extends Component{

    handleClick = (e,d) => {
        e.preventDefault();
        this.props.onClick(d);
    };

    render() {
        const { classes, data = [], button } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.list}>
                    <p><strong>Name</strong></p>
                    <p><strong>Language</strong></p>
                    <p><strong>Latest Tag</strong></p>
                    <div />
                    {
                        data.map(d => ([
                            <div key={`${d.id}1`}>{d.name}</div>,
                            <div key={`${d.id}2`}>{d.language}</div>,
                            <div key={`${d.id}3`}>{d.tag}</div>,
                            <div key={`${d.id}4`}>{!d.exist ? <a href="#" onClick={(e) => this.handleClick(e,d)}>{button}</a> : null}</div>
                        ]))
                    }
                </div>
            </div>
        )
    }
}

const styles = {
    list: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '11fr repeat(3, 10fr)',
        gridColumnGap: '9px',
        margin: 'auto',
    },
    main: {
        width: '100%'
    }
};

export default injectSheet(styles)(RepoList);