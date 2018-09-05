import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import data from './data';
import { AppBar, Hero, Gallery, Footer } from './components';

const styles = theme => ({
    tabs: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const info = [
    ['Facebook', 'Twitter', 'Youtube', 'Walter Veith', 'RTR', 'TO', 'GC'],
    ['Promo codes', 'Water Ionizer', 'e-newsletter', 'Border Lineups', 'WA Border'],
    [
        'Broadcast Inventory',
        'Technical issues',
        'GitWeb',
        'Video Editing Job List',
        ' Broadcast Schedule',
        'Product Numbering List',
        'Update Audio Library',
        'Jet'
    ]
];

const list = ['Glorystar', 'Surveys', 'Survey Statistics'];

class App extends Component {
    state = {
        tab: 0,
        data,
        info,
        list
    };

    handleChange = (event, tab) => {
        this.setState({ tab });
    };

    onDragEnd = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const data = reorder(this.state.data, result.source.index, result.destination.index);

        this.setState({
            data
        });
    };
    render() {
        const { classes } = this.props;
        const { tab, info, list } = this.state;
        return (
            <Fragment>
                <CssBaseline />
                <AppBar menuList={list} />
                <Hero />
                <main>
                    <div className={classes.tabs}>
                        <Tabs
                            value={tab}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="General" />
                            <Tab label="Sales" />
                            <Tab label="Administrative" />
                            <Tab label="Amazing Health" />
                        </Tabs>
                    </div>
                    <Gallery tabs={data} tab={tab} />
                </main>
                <Footer tab={tab} info={info} />
            </Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
