import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles/NavbarStyles';
import { LanguageContext } from "./contexts/LanguageContext";
import { ColorModeContext } from './contexts/ToggleMode';

const content = {
    english: {
        search: "Search",
        flag: "🇬🇧"
    },
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    },
    spanish: {
        search: "Buscar",
        flag: "🇪🇸"
    }
};

function Navbar(props) {
    const colorMode = React.useContext(ColorModeContext);
    const { language } = React.useContext(LanguageContext);
    const { search, flag } = content[language];
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit'>
                        <span>{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} variant='h6' color='inherit'>
                        App Title
                    </Typography>
                    <Switch onClick={colorMode.toggleColorMode} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder={`${search}...`} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default withStyles(styles)(Navbar);