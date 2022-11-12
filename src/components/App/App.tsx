import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';


const App = () => {
    return (
        <div className='wrapper'>
            <div className='form'>
                <div className='form__input'>
                    <input className='form__input-field' placeholder='Ваш номер...' />
                </div>
                <div className='form__button'>
                    <button className='form__button-submit'><div className='form__button-submit--text'><span><FontAwesomeIcon icon={faTag} /> ЗАКАЗАТЬ</span></div></button>
                </div>
            </div>
        </div>
    )
}

export default App;
