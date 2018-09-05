import React from 'react';
import { AppBar, Toolbar, Button, withStyles, ButtonBase } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Menu from './Menu';

const styles = theme => ({
    appBar: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    }
});

const ADAppBar = ({ classes, menuList }) => {
    return (
        <AppBar position="static" className={classes.appBar}>
            <ButtonBase>
                <Toolbar>
                    <HomeIcon />
                </Toolbar>
            </ButtonBase>
            <Toolbar>
                <Button color="inherit">Extension Features</Button>
                <Button color="inherit">AD Internal Blog</Button>
                <Menu menuList={menuList} />
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(ADAppBar);
