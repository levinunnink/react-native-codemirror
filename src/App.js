import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      options: props.options,
    };
    console.log('This props', this.props);
    autoBind(this);
  }

  handleOnChange(editor, data, value) {
    this.sendEvent('onChange', { data, value });
  }

  handleOnBeforeChange(editor, data, value) {
    this.sendEvent('onBeforeChange', { data, value });
  }

  handleOnBlur(data, value) {
    this.sendEvent('onBlur', { data, value });
  }

  handleOnCursor(data, value) {
    this.sendEvent('onCursor', { data, value });
  }

  handleOnCursorActivity(data, value) {
    this.sendEvent('onCursorActivity', { data, value });
  }

  handleOnCut(data, value) {
    this.sendEvent('onCut', { data, value });
  }

  handleOnFocus(data, value) {
    this.sendEvent('onFocus', { data, value });
  }

  handleOnKeyDown(data, value) {
    this.sendEvent('onKeyDown', { data, value });
  }

  handleOnKeyPress(data, value) {
    this.sendEvent('onKeyPress', { data, value });
  }

  handleOnKeyUp(data, value) {
    this.sendEvent('onKeyPress', { data, value });
  }

  handleOnPaste(data, value) {
    this.sendEvent('onPaste', { data, value });
  }

  handleOnScroll(data, value) {
    this.sendEvent('onScroll', { data, value });
  }

  handleOnSelection(data, value) {
    this.sendEvent('onSelection', { data, value });
  }

  handleOnTouchStart(data, value) {
    this.sendEvent('onTouchStart', { data, value });
  }

  handleOnUpdate(data, value) {
    // this.sendEvent('onUpdate', { data, value });
  }

  handleOnViewportChange(data, value) {
    this.sendEvent('onViewportChange', { data, value });
  }

  sendEvent(eventName, args) {
    if (!window.ReactNativeWebView) return;
    const object = {
      event: eventName,
    };
    if (args) object.data = args;
    window.ReactNativeWebView.postMessage(JSON.stringify(object));
  }

  render() {
    return (
      <div className="react-code-mirror-wrapper">
        <CodeMirror
          value={this.state.value}
          options={this.state.options}
          // onBeforeChange={this.handleOnBeforeChange}
          onChange={this.handleOnChange}
          // onBlur={this.handleOnBlur}
          // onCopy={this.handleOnCopy}
          // onCursor={this.handleOnCursor}
          // onCursorActivity={this.handleOnCursorActivity}
          // onCut={this.handleOnCut}
          // onFocus={this.handleOnFocus}
          // onKeyDown={this.handleOnKeyDown}
          // onKeyPress={this.handleOnKeyPress}
          // onKeyUp={this.handleOnKeyUp}
          // onPaste={this.handleOnPaste}
          // onScroll={this.handleOnScroll}
          // onSelection={this.handleOnSelection}
          // onTouchStart={this.handleOnTouchStart}
          // onUpdate={this.handleOnUpdate}
          // onViewportChange={this.handleOnViewportChange}
        />
      </div>
    );
  }
}

export default App;
