import ColorPicker from '../comps/ColorPicker';
import Layout from '../comps/Layout';
import Head from '../comps/Head';
import Code from '../comps/Code';
import Icons from '../comps/Icons';

const index = () => {
    return (
        <Layout>
            <Head />
            <ColorPicker />
            <Code />
            <Icons />
        </Layout>
    )
}

export default index;
