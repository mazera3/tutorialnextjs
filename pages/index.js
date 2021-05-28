import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Alert,
    Container
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// Icones: twitter, coffee, user-graduate
library.add(fas,fab, faCoffee);


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
            <>
                Icones:<br/>
                Café: <FontAwesomeIcon icon="coffee" /><br/>
                Usuario: <FontAwesomeIcon icon="user" /><br/>
                Graduado: <FontAwesomeIcon icon="user-graduate" /><br/>
                Twitter: <FontAwesomeIcon icon={['fab', 'twitter']} /><br/>
                Frasco: <FontAwesomeIcon icon={['fas', 'flask']} /><br/>
            </>
        </Container>
    </div>
);

export default Home