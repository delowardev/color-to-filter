import Header from "./Header";
import {Consumer} from './MyProvider';
import Footer from "./Footer";

const Layout = (props) => (
    <Consumer>
        {context => (
            <div id="content" style={{background: context.state.color.hex}}>
                <div className="content-inner">
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </div>
        )}
    </Consumer>
);

export default Layout;