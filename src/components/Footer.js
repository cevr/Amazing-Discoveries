import React, { Fragment } from 'react';
import { Typography, withStyles, Button } from '@material-ui/core';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing.unit * 2
    },
    link: {
        fontSize: '9pt'
    }
});

const Footer = ({ classes, tab, info }) => {
    return (
        <footer className={classes.footer}>
            {info[tab] && (
                <Fragment>
                    <Typography variant="subheading" align="center" gutterBottom>
                        More Links
                    </Typography>
                    <div className={classes.links}>
                        {info[tab].map((link, index) => (
                            <Button key={index} variant="text" className={classes.link}>
                                {link}
                            </Button>
                        ))}
                    </div>
                </Fragment>
            )}
            <Typography variant="caption" align="center" color="textSecondary" component="p">
                "They gave our Master a crown of thorns – Why do we hope for a crown of roses?" ~ Martin Luther
            </Typography>
        </footer>
    );
};

Footer.defaultProps = {
    tab: 0,
    info: []
};

export default withStyles(styles)(Footer);
