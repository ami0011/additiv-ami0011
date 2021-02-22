import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { isNil, uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorPage from './ErrorPage';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    }
}));

const SearchDetail = () => {
    const classes = useStyles();
    const { id } = useParams();
    const API_URL = `http://api.additivasia.io/api/v1/assignment/employees/${id}`;

    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getEmployee();
    }, []);


    const getEmployee = async () => {
        const response = await fetch(API_URL);
        const { status } = response;
        if (status !== 200) {
            setError(status);
            return;
        }
        const data = await response.json();
        const hasSubordinates = isNil(data[1]);
        setEmployee(hasSubordinates ? null : data[1]['direct-subordinates']);
    }
    if (error) {
        return <ErrorPage />
    }
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Grid className={classes.title}>
                    <Typography variant="subtitle1" color="textPrimary">Employee Overview</Typography>
                </Grid>
                {employee && <Grid>
                    <Typography variant="subtitle2" color="textSecondary"> Subordinates of employee <strong>{id}</strong>: </Typography>
                    <List className={classes.list}>
                        {employee?.map((item) => <ListItem key={uniqueId('key-')}>
                            <ListItemAvatar>
                                <Avatar>{item.charAt(0)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item} />
                        </ListItem>)}
                    </List>
                </Grid>}
                {!employee && <Grid>
                    <Typography variant="subtitle2" color="textSecondary">
                        There are no Subordinates of employee <strong>{id}</strong>
                    </Typography>
                </Grid>}
            </Paper>
            <Button color="primary" aria-label="home" href="/" className={classes.button}>Go Back</Button>
        </Container>
    )
}

export default SearchDetail;