import { IErrorModalProps } from "../../interfaces/IErrorModalProps";
import "./errorModal.scss";

const ErrorModal = ({setIsErrorModalHidden}: IErrorModalProps) => {

    return (
      <div className="error-modal">
        <div className="error-modal__content">
          <span className="error-modal__close" onClick={() => setIsErrorModalHidden(true)}>&times;</span>
          <p className="error-modal__headline">Номер введён некорректно! Введите номер по следующему образцу: +375 ## ### ## ##</p>
        </div>
      </div>
    )
}

export default ErrorModal;
