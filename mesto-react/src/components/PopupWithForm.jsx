import { Children } from "react";

function PopupWithForm({title, name, children, isOpen, onClose}){



    
    return(
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' :'animation_close'}`}>
        <div className="popup__container popup__container_edit">
            <button type="button" onClick={onClose} className={`popup__close popup__close_${name}`}></button>
            <h2 className="popup__header">{title}</h2>
            {children}
        </div>

    </div>
    );
}

export default PopupWithForm;