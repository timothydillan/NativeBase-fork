/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  Keyboard,
  Platform,
  Animated,
  ViewPropTypes,
  PanResponder
} from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { PLATFORM, deviceWidth } from '../theme/variables/commonColor';

import { Text } from './Text';
import { Toast } from './Toast';

const POSITION = {
  ABSOLUTE: 'absolute',
  BOTTOM: 'bottom',
  TOP: 'top',
};

class ToastContainer extends Component {
  static show({ ...config }) {
    this.toastInstance._root.showToast({ config });
  }
  static hide() {
    if (this.toastInstance._root.getModalState()) {
      this.toastInstance._root.closeToast('functionCall');
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      pan: new Animated.ValueXY({ x: 0, y: 0 }),
      keyboardHeight: 0,
      isKeyboardVisible: false,
      modalVisible: false,
    };

    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderRelease: (evt, { dx }) => {
        if (dx !== 0) {
          Animated.timing(this.state.pan, {
            toValue: { x: dx, y: 0 },
            duration: 100,
            useNativeDriver: false
          }).start(() => this.closeToast('swipe'));
        }
      },
    });
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this.keyboardDidHide);
  }

  getToastStyle() {
    return {
      position: POSITION.ABSOLUTE,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      opacity: this.state.fadeAnim,
      elevation: 9,
      paddingHorizontal: Platform.OS === PLATFORM.IOS ? 20 : 0,
      top: this.state.position === POSITION.TOP ? 30 : undefined,
      bottom:
        this.state.position === POSITION.BOTTOM ? this.getTop() : undefined,
    };
  }

  getTop() {
    if (Platform.OS === PLATFORM.IOS && this.state.isKeyboardVisible) {
      return this.state.keyboardHeight;
    }
    return 30;
  }

  getModalState() {
    return this.state.modalVisible;
  }

  static toastInstance;

  keyboardDidHide() {
    this.setState({
      keyboardHeight: 0,
      isKeyboardVisible: false,
    });
  }

  keyboardDidShow(e) {
    this.setState({
      keyboardHeight: e.endCoordinates.height,
      isKeyboardVisible: true,
    });
  }

  showToast({ config }) {
    this.setState({
      modalVisible: true,
      text: config.text,
      type: config.type,
      borderRadius: config.borderRadius || 50,
      position: config.position ? config.position : POSITION.BOTTOM,
      supportedOrientations: config.supportedOrientations,
      style: config.style,
      textStyle: config.textStyle,
      onClose: config.onClose,
      swipeDisabled: config.swipeDisabled || false
    });
    // If we have a toast already open, cut off its close timeout so that it won't affect *this* toast.
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    // Set the toast to close after the duration.
    if (config.duration !== 0) {
      const duration = config.duration > 0 ? config.duration : 1500;
      this.closeTimeout = setTimeout(
        this.closeToast.bind(this, 'timeout'),
        duration
      );
    }
    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }
  closeModal = (reason) => {
    this.setState({
      modalVisible: false,
    });
    const { onClose } = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  };
  closeToast(reason) {
    clearTimeout(this.closeTimeout);
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      this.closeModal(reason);
      this.state.pan.setValue({ x: 0, y: 0 });
    });
  }

  clampedWidth() {
    /* Clamps the width to 'auto' if the width of the toast component passes the width of the device. */
    let width = this.state.text.length * 10;

    if (width >= deviceWidth - 10) {
      width = 'auto';
    }

    return width;
  }

  render() {
    if (this.state.modalVisible) {
      const { x, y } = this.state.pan;
      return (
        <Animated.View
          {...this.state.swipeDisabled ? {} : this._panResponder.panHandlers}
          style={[
            this.getToastStyle(),
            { transform: [{ translateX: x }, { translateY: y }] },
          ]}
        >
          <Toast
            style={[this.state.style, {
              width: this.clampedWidth(),
              borderRadius: this.state.borderRadius
            }]}
            danger={this.state.type === 'danger'}
            success={this.state.type === 'success'}
            warning={this.state.type === 'warning'}
          >
            <Text
              numberOfLines={1} 
              style={[this.state.textStyle, {
                textAlignVertical: "center",
                textAlign: "center"
              }]}>
              {this.state.text}
            </Text>
          </Toast>
        </Animated.View>
      );
    }
    return null;
  }
}

ToastContainer.propTypes = {
  ...ViewPropTypes,
};

const StyledToastContainer = connectStyle(
  'NativeBase.ToastContainer',
  {},
  mapPropsToStyleNames
)(ToastContainer);

export { StyledToastContainer as ToastContainer };