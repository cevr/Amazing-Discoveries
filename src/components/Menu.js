import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core';

const styles = {
    menu: {
        textAlign: 'right'
    }
};

class SimpleMenu extends React.Component {
    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { menuList, classes } = this.props;
        return (
            <div>
                <Button
                    color="inherit"
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    More
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                >
                    {menuList.map((item, index) => (
                        <MenuItem key={index} className={classes.menu} onClick={this.handleClose}>
                            {item}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(SimpleMenu);
