/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-es6-class */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import createReactClass from 'create-react-class';
import { Picker } from '@react-native-picker/picker';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

export default class PickerNB extends Component {
  constructor(props) {
    super(props);
    // Receives placeholder-related attributes defined by the user, if any.
    this.placeHolderText = typeof props.placeHolderText === 'string' ? props.placeHolderText : null;
    this.placeHolderStyle = typeof props.placeHolderStyle === 'object' ? props.placeHolderStyle : null;
  }

  render() {
    const placeHolderText = this.placeHolderText;
    return (
      <Picker ref={c => (this._root = c)} {...this.props}>
        {placeHolderText !== null && <Picker.Item value='' label={placeHolderText} style={pickerStyles.placeHolderStyle} />}
        {this.props.children}
      </Picker>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
PickerNB.Item = createReactClass({
  render() {
    return <Picker.Item {...this.props} />;
  }
});

PickerNB.propTypes = {
  ...Picker.propTypes
};

const StyledPickerNB = connectStyle(
  'NativeBase.PickerNB',
  {},
  mapPropsToStyleNames
)(PickerNB);

const pickerStyles = StyleSheet.create({
  placeHolderStyle: this.placeHolderStyle ? this.placeHolderStyle
    : {
      color: "#c8c8cb"
    }
});

export { StyledPickerNB as PickerNB };