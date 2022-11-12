import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <div>
            <h1 className='app'>App</h1>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    )
}

export default App;
