import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    CircularProgress,
    CssBaseline,
    Grid,
    Hidden,
    Link,
    withStyles,
} from '@material-ui/core';

import { Header, Sidebar } from '../partials';

class Master extends Component {
    state = {
        mobileOpen: false,
        localeMenuOpen: false,
        localeMenuEl: null,
        accountMenuOpen: false,
        accountMenuEl: null,
    };

    /**
     * Event listener that is triggered when the a nav link menu is clicked.
     *
     * @param {string} statusIndicator
     *
     * @return {undefined}
     */
    handleNavLinkMenuToggled = statusIndicator => {
        this.setState(prevState => {
            return {
                localeMenuOpen: false,
                accountMenuOpen: false,
                mobileOpen: false,
                [statusIndicator]: !prevState[statusIndicator],
            };
        });
    };

    /**
     * Event listener that is triggered when the the mobile drawer toggle is clicked.
     *
     * @return {undefined}
     */
    handleDrawerToggled = () => {
        this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
    };

    render() {
        const { classes, children, history, location, loading } = this.props;

        const { mobileOpen } = this.state;

        const renderLoading = (
            <Grid
                container
                className={classes.loadingContainer}
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <CircularProgress color="primary" />
                </Grid>
            </Grid>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />

                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={this.handleDrawerToggled}
                            locationPathname={location.pathname}
                            navigate={path => history.push(path)}
                        />
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            locationPathname={location.pathname}
                            navigate={path => history.push(path)}
                        />
                    </Hidden>
                </nav>

                <div className={classes.contentWrapper}>
                    <Header
                        parentProps={{
                            ...this.props,
                            ...this.state,
                            onDrawerToggle: this.handleDrawerToggled,
                            onNavLinkMenuToggle: this.handleNavLinkMenuToggled,
                        }}
                    />

                    <main className={classes.content}>
                        {loading ? (
                            renderLoading
                        ) : (
                            <Grid container>{children}</Grid>
                        )}
                    </main>

                    <footer className={classes.footer}>
                        <p>
                            {Lang.get('navigation.citation')}{' '}
                            <Link
                                href="https://github.com/palonponjovertlota"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @palonponjovertlota
                            </Link>
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
}

Master.propTypes = {
    classes: PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
    pageTitle: PropTypes.string.isRequired,
    primaryAction: PropTypes.object,
    tabs: PropTypes.array,
};

const drawerWidth = 256;

const styles = theme => ({
    root: {
        display: 'flex',
        position: 'relative',
        minHeight: '100vh',
        maxWidth: '100%',
    },

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    contentWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'scroll',
    },

    content: {
        flex: 1,
        padding: theme.spacing.unit * 4,
        marginBottom: '5rem',
        backgroundColor: theme.palette.grey['200'],
    },

    loadingContainer: {
        minHeight: '100%',
    },

    footer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        padding: '1rem',
        textAlign: 'center',
    },
});

export default withStyles(styles)(Master);
