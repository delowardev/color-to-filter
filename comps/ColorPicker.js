import React, { Component } from 'react';
import { ChromePicker, CompactPicker, GithubPicker, HuePicker, AlphaPicker, TwitterPicker } from 'react-color';
import { Consumer } from '../comps/MyProvider';

export default class ColorPicker extends Component {
    render() {
        return (
            <Consumer>
                {context => (
                    <div className="color-picker">
                        <HuePicker color={context.state.color} onChange={color => context._setColor({ color })} />
                        <TwitterPicker color={context.state.color} onChange={color => context._setColor({ color })} />
                    </div>
                )}
            </Consumer>
        );
    }
}
