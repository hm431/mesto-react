

function PopupWithForm({title, name, buttonText, children, isOpen, onClose}){



    
    return(
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' :'animation_close'}`}>
        <div className="popup__container popup__container_edit">
            <button type="button" onClick={onClose} className={`popup__close popup__close_${name}`}></button>
            <h2 className="popup__header">{title}</h2>
            <form action="#" method="get"  className="popup__form" noValidate>
                {children}
                <button type="submit" className={`popup__save popup__save_${name}`}>{buttonText}</button>
            </form>
        </div>

    </div>
    );
}

export default PopupWithForm;