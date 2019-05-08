import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import autoBind from 'auto-bind';

import htmlContent from '../dist/index.html';

type Props = {};

export default class ReactNativeCodemirror extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    autoBind(this);
  }

  handleMessage(event) {
    if (!event.nativeEvent.data) return;
    this.setState({
      message: JSON.stringify(event.nativeEvent.data),
    });
  }

  componentDidMount() {
    const execute = `
      window.updateConfig('options', {mode: 'javascript', theme: 'material', lineNumbers: true});
      true;
    `;
    setTimeout(() => {
      this.webref.injectJavaScript(execute);
    }, 1500);
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text>{this.state.message}</Text>
        <WebView
          ref={r => (this.webref = r)}
          source={htmlContent}
          originWhitelist={['*']}
          onMessage={this.handleMessage}
        />
      </View>
    );
  }
}
