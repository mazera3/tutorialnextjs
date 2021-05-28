import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Alert,
    Container
} from 'reactstrap';


const Home = () => (
    <div>
        <Head>
            <title> Home - Next</title>
            <meta name="robots" content="index/follow" />
            <meta name="description" content="tutorial next js" />
        </Head>
        <Container>
            <Alert color="primary">
                Olá Mundo! </Alert>
            <Button color="danger"> Danger!
            </Button>
        </Container>
    </div>
);

export default Home