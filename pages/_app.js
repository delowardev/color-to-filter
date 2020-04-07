import MyProvider from '../comps/MyProvider'
import '../styles/style.scss';

const MyApp = ({Component, pageProps}) => {
    return (
        <MyProvider>
            <Component {...pageProps} />
        </MyProvider>
    )
}

export default MyApp;