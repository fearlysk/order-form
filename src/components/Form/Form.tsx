import { useState } from "react";
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import InputMask from 'react-input-mask';
import ErrorModal from "../ErrorModal/ErrorModal";
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { addNumber } from "../../store/reducers/users/usersReducer";
import 'tippy.js/dist/tippy.css'; 
import './styles.scss';

const Form = () => {

    const numbers = useAppSelector(state => state.numbers.numbers);
    const dispatch = useAppDispatch();

    const [queryValue, setQueryValue] = useState<string>("");
    const [isErrorModalHidden, setIsErrorModalHidden] = useState<boolean>(true);
    const [addedToNumberListVisible, setAddedToNumberListVisible] = useState<boolean>(false);

    const onChangeHandler = (value: string) => {
        setQueryValue(value);
      }
    const addNumberToList = (value) => {
        if(value.length === 13) {
           dispatch(addNumber(value));
           setQueryValue("");
           setAddedToNumberListVisible(true);
           setTimeout(() => setAddedToNumberListVisible(false), 1200);
        } else {
           setIsErrorModalHidden(false);
        }
    }

    return (
        <div className="app">
            
            {!isErrorModalHidden ? <ErrorModal setIsErrorModalHidden={setIsErrorModalHidden} /> : null }
            
            <div className='form__wrapper'>
                <div className='form'>
                    <div className='form__input'>
                        <InputMask mask="+37\5999999999" maskChar="" 
                            className='form__input-field'
                            placeholder='Ваш номер...' 
                            value={queryValue}
                            onChange={(e) => onChangeHandler(e.target.value)}
                        />
                    </div>
                    <div className='form__button'>
                        <Tippy content={<span>Номер добавлен!</span>} visible={addedToNumberListVisible}>
                            <button
                             className='form__button-submit'
                             onClick={() => addNumberToList(queryValue)}
                            >
                              <div className='form__button-submit--text'>
                                  <span><FontAwesomeIcon icon={faTag} /> ЗАКАЗАТЬ</span>
                              </div>
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
             {numbers.length > 0 ? 
                <div className="numbers-list">
                    <h3 className="numbers-list__headline">Список номеров</h3>
                    {numbers.map((user, i) => <p>{i + 1 + ": " + user}</p>)}
                </div>
             : null}
        </div>
     )
}

export default Form;
