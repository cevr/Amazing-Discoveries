import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import Card from './Card';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`
    }
});

const Gallery = ({ classes, tabs, tab }) => {
    return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
                {tabs[tab].content.map((card, index) => (
                    <Grid item key={index} sm={6} md={4} lg={3}>
                        <Card title={card.title} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

Gallery.defaultProps = {
    content: []
};

export default withStyles(styles)(Gallery);
