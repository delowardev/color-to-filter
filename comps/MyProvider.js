import React from 'react';
import Color from './Color';
import Solver from './Solver';

const Context = React.createContext();
const Consumer = Context.Consumer;

class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: {
                hex: '#8900FF',
                rgb: {
                    r: 137,
                    g: 0,
                    b: 255
                }
            },
            result: {}
        }
    }

    componentDidMount() {
        this._setFilter(this.state);
    }

    _setColor = color => {
        const {r, g, b} = color.color.rgb
        this.setState(color);
        this._setFilter(color);
    }

    _setFilter = color => {
        const { r, g, b } = color.color.rgb;
        const cr = new Color(r, g, b);
        const solver = new Solver(cr);
        this.setState({ result: solver.solve() });
    }

    render() {
        return (
            <Context.Provider 
                value={{ 
                    state: this.state, 
                    _setColor: this._setColor 
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export { Consumer, MyProvider as default};