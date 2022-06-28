import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <span>🇫🇷</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>
                            App Title
                        </Typography>
                        <Switch />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search...' />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);