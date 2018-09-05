import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[600]
        }
    }
});
function Main() {
    return (
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    );
}
render(<Main />, document.getElementById('root'));
registerServiceWorker();
