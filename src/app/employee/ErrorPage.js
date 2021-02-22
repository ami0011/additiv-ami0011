import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        maxWidth: 400,
        flexGrow: 1,
    },
    icon: {
        width: 192,
        height: 192,
        color: theme.palette.secondary.main,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: `100%`,
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        margin: 0,
        height: `calc(100vh - 64px)`,
    },
    button: {
        marginTop: 20,
    },
}));

const ErrorPage = () => {
    const classes = useStyles();
    const { id } = useParams();
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <div className={classes.container}>
                <Typography variant="h4">Oops.....</Typography>
                <Typography variant="subtitle1">
                    {id} do not work for our organization.
                            </Typography>
                <Button
                    color="secondary"
                    aria-label="home"
                    href="/"
                    className={classes.button}
                >
                    Go Back to home
                    </Button>
            </div>
        </Grid>
    );
};

export default ErrorPage;