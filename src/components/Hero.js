import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import RotatingText from 'react-rotating-text';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 800,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4
    }
});

const Hero = ({ classes }) => {
    return (
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                    Amazing <RotatingText items={['Discoveries', 'Health', 'News']} pause={3000} />
                </Typography>
                <Typography variant="title" align="center" color="textSecondary" paragraph />
            </div>
        </div>
    );
};

export default withStyles(styles)(Hero);
