import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './TitleBar';
import MainDrawer from './MainDrawer';
import autoprefixer from 'material-ui/utils/autoprefixer';

const muiTheme = getMuiTheme({
  // mui theme
});

const prefix = autoprefixer(muiTheme);

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    // constructor ...
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={prefix({ display: 'flex', flexDirection: 'column', minHeight: '100vh' })}>
            <TitleBar />
            <div className="body" style={prefix({ display: 'flex', flex: '1', backgroundColor: '#edecec' })}>
                <div style={prefix({ flex: 1 })}>CONTENT</div>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
