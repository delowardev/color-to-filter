import Header from "./Header";
import {Consumer} from './MyProvider';

const Layout = (props) => (
    <Consumer>
        {context => (
            <div id="content" style={{background: context.state.color.hex}}>
                <Header />
                {props.children}
            </div>
        )}
    </Consumer>
);

export default Layout;