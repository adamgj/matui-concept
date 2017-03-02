import React from 'react';
import Dialog from 'material-ui/Dialog';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class CaptureModal extends React.Component {
  state = {
    open: false,
    stepIndex: 0,
    selectValue: null,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleCancel = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.setState({open: false});
  };

    handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleSelectChange = (event, index, value) => this.setState({selectValue: value});

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 2 && (
            <RaisedButton
            label="Next"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
            />
        )}
        {step >= 2 && (
            <RaisedButton
            label="Submit"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleSubmit}
            style={{marginRight: 12}}
            />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  renderSelect(value) {
      return (
        <div>
            <SelectField
            floatingLabelText="Complaint Type"
            value={value}
            onChange={this.handleSelectChange}
            >
                <MenuItem value={null} primaryText="" />
                <MenuItem value={1} primaryText="Type 1" />
                <MenuItem value={2} primaryText="Type 2" />
                <MenuItem value={3} primaryText="Type 3" />
            </SelectField>
        </div>  
      );
  }

  render() {
    const {stepIndex} = this.state;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="New Complaint"
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
            <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                <Stepper
                activeStep={stepIndex}
                linear={false}
                orientation="vertical"
                >
                <Step>
                    <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
                    Provide a description
                    </StepButton>
                    <StepContent>
                        <p>
                            Describe your complaint below. Be descriptive and other advice.
                        </p>
                        {this.renderSelect(this.state.selectValue)}
                        <TextField
                        hintText="Complaint description"
                        multiLine={true}
                        rows={4}
                        rowsMax={8}
                        />
                        {this.renderStepActions(0)}
                    </StepContent>
                </Step>
                <Step>
                    <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                    Provide additional details
                    </StepButton>
                    <StepContent>
                        <p>Provide as much additional detail as possible.</p>
                        <DatePicker hintText="Date of incident" />
                        <TimePicker
                            hintText="Time of incident"
                        />
                        {this.renderStepActions(1)}
                    </StepContent>
                </Step>
                <Step>
                    <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
                    Provde contact details
                    </StepButton>
                    <StepContent>
                        <p>
                            Complete the complaint.
                        </p>
                        <div style={styles.block}>
                            <Checkbox
                            label="Close on Submit"
                            style={styles.checkbox}
                            />
                            <Checkbox
                            checkedIcon={<Visibility />}
                            uncheckedIcon={<VisibilityOff />}
                            label="Watch this issue"
                            style={styles.checkbox}
                            />
                        </div>
                        {this.renderStepActions(2)}
                    </StepContent>
                </Step>
                </Stepper>
            </div>
        </Dialog>
      </div>
    );
  }
}