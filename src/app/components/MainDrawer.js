import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconDashboard from 'material-ui/svg-icons/action/dashboard';
import IconSettings from 'material-ui/svg-icons/action/settings';
import IconTimeline from 'material-ui/svg-icons/action/timeline';
import IconLibrary from 'material-ui/svg-icons/maps/local-library';
import IconIssues from 'material-ui/svg-icons/action/view-list';

export default class MainDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleHide = () => this.setState({open: false});

  handleShow = () => this.setState({open: true});

  render() {
    return (
      <div>
        <Drawer width={230} open={this.state.open}>
            <AppBar
                title="AppName"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.handleHide}
            />
            <MenuItem leftIcon={<IconDashboard />} >Dashboard</MenuItem>
            <MenuItem leftIcon={<IconIssues />}>Issues</MenuItem>
            <MenuItem leftIcon={<IconTimeline />} >Reports</MenuItem>
            <MenuItem leftIcon={<IconLibrary />} disabled={true} >Library</MenuItem>
            <MenuItem leftIcon={<IconSettings />} >Settings</MenuItem>
        </Drawer>
      </div>
    );
  }
}