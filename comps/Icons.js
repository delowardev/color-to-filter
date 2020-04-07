import {Consumer} from './MyProvider';
import { withRouter } from 'next/router';
const Icons = () => {
    return (
        <Consumer>
            {context => {
                const style = {filter: context.state.result.filter}
                return (
                    <div className="iocns-wrap">
                        <div className="icons">
                            <img style={style} src='../static/facebook.svg' alt="Facebook" />
                            <img style={style} src='../static/twitter.svg' alt="Twitter" />
                            <img style={style} src='../static/pinterest.svg' alt="Pinterest" />
                        </div>
                        <p>Example: SVG as Image</p>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default withRouter (Icons);
