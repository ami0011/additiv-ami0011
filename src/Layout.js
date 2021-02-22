import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SupervisedUserCircleTwoTone from '@material-ui/icons/SupervisedUserCircleTwoTone'
import { CssBaseline } from '@material-ui/core';
import ReactRouter from './Routes';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));
const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline></CssBaseline>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to={"/"}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <SupervisedUserCircleTwoTone />
                        </IconButton></Link>
                    <Typography variant="h6" color="inherit">
                        Employee Directory App
                </Typography>
                </Toolbar>
            </AppBar>
            <main >
                <ReactRouter></ReactRouter>
            </main>
        </div>
    );

}

export default Layout;