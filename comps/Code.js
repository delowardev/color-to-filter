import {Consumer} from './MyProvider';
import Copy from '../public/static/copy-flat.svg';
import Notifications, { notify } from 'react-notify-toast';
import { Fragment } from 'react';

const Code = () => {
    return (
        <Consumer>
            {(context) => {
                const filter = context.state.result.filter;
                const _onClick = () => {
                    navigator.clipboard.writeText(`filter: ${filter}`).then(function () {
                        notify.show('Copied!', 'success');
                    }, function (err) {
                            notify.show('Cannot copy!', 'error');
                        console.error('Con\'t copy to clipboard', err);
                    });
                }
                return (
                    <Fragment>
                        <Notifications />
                        <div className="code-snippet">
                            filter: {filter}
                            <button onClick={_onClick}><Copy /></button>
                        </div>
                    </Fragment>
                )
            }}
            
        </Consumer>
    )
}

export default Code;
