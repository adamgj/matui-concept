import React from 'react';
import AppBar from 'material-ui/AppBar';
import NotificationBell from './NotificationBell';
import CreateButton from './CreateButton';
import MainDrawer from './MainDrawer';
import QuickSearch from './QuickSearch';
import UserProfile from './UserProfile';

const style = {
  bar: {
    // style
  },
  container: {
    'display': 'flex',
    'flexFlow': 'row nowrap',
    'justifyContent': 'space-between'
  }
};

export default class TitleBar extends React.Component {

  showDrawer = () => this.refs.mainDrawer.handleShow();

  render() {
    return (
      <AppBar
        title="AppName"
        style={style.bar}
        onLeftIconButtonTouchTap={this.showDrawer}
      >
        <MainDrawer ref="mainDrawer" />
        <div style={style.container}>
          <CreateButton />

          <QuickSearch />
          <NotificationBell />
          <UserProfile />
        </div>
      </AppBar>
    );
  }
}