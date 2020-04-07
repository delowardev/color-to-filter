import {Consumer} from './MyProvider';
import { withRouter } from 'next/router';
const Icons = () => {
    return (
        <Consumer>
            {context => {
                const style = {filter: context.state.result.filter}
                return (
                    <div className="iocns-wrap">
                        <p>Example: SVG as Image</p>
                        <div className="icons">
                            <a target='_blank' href="https://github.com/delowardev">
                                <img style={style} src='../static/github.svg' alt="GitHub" />
                            </a>
                            <a target='_blank' href="https://fb.com/delowardev">
                                <img style={style} src='../static/facebook.svg' alt="Facebook" />
                            </a>
                            <a target='_blank' href="https://twitter.com/delowardev">
                                <img style={style} src='../static/twitter.svg' alt="Twitter" />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/delowar/">
                                <img style={style} src='../static/linkedin.svg' alt="Linkedin" />
                            </a>
                            <a target='_blank' href="https://www.instagram.com/delowardev/">
                                <img style={style} src='../static/instagram.svg' alt="Instagram" />
                            </a >
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default withRouter (Icons);
