import { Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(10),
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(4),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Search = () => {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState();

    const handleSearch = () => {
        if (name?.length > 2) {
            history.push(`/${name}`);
        }
        return;
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="h3" color="secondary">Employee Explorer</Typography>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search Employee's"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setName(e.target.value)}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
}


export default Search;