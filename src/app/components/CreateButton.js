import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CaptureModal from './CaptureModal';

const style = {
  margin: 12,
};

export default class CreateButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  showComplaintModal = () => {
    this.handleRequestClose();
    this.refs.captureModal.handleOpen();
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
            label="Create"
            onTouchTap={this.handleTouchTap}
            labelPosition="before"
            icon={<ContentAdd />}
            onTouchTap={this.handleTouchTap}
            secondary={true} style={style}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu onItemTouchTap={this.showComplaintModal}>
            <MenuItem primaryText="Complaint" />
            <MenuItem disabled={true} primaryText="Investigation" />
            <MenuItem disabled={true} primaryText="ToDo" />
          </Menu>
        </Popover>
        <CaptureModal ref="captureModal" />
      </div>
    );
  }
}