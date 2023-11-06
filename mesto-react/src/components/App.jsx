import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/Api';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, changeAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, changePlasePopupOpen] = React.useState(false);


    const [selectedCard, changeSelectedCard] = React.useState(null);

    function handleCardClick(card) {
        changeSelectedCard(card);
    }


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        changeAvatarPopupOpen(false);
        changePlasePopupOpen(false);
        changeSelectedCard(null);
    }


    function handleEditAvatarClick() {
        changeAvatarPopupOpen(true);
    }

    function handleAddPlaceClick() {
        changePlasePopupOpen(true);
    }





    return (







        <div className="page">

            <Header />

            <Main
                onCardClick={handleCardClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />

            <Footer />


            <PopupWithForm
                title="Редактировать профиль"
                name="profil"
                buttonText="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}>

                <input type="text" name="popupName" placeholder="Имя" id="name"
                    className="popup__input popup__input_name_text" required minLength="2" />
                <span className="popup__error  popup__error_name "></span>
                <input type="text" name="popupStatus" placeholder="О себе" className="popup__input popup__input_status_text"
                    id="status" required minLength="2" />
                <span className="popup__error  popup__error_status"></span>

            </PopupWithForm>


            <PopupWithForm
                title="Новое место"
                name="place"
                buttonText="Сохранить"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}>


                <input type="text" name="popupName" placeholder="Название" className="popup__input popup__input_place_text"
                    required minLength="2" id="text" />

                <span className="popup__error  popup__error_text "></span>

                <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                    className="popup__input popup__input_place_link" id="url" required />

                <span className="popup__error  popup__error_url"></span>

            </PopupWithForm>


            <PopupWithForm
                title="Вы уверены?"
                buttonText="Сохранить"
                name="delite"
                onClose={closeAllPopups}>

                <button type="submit" className="popup__save popup__save_delite">Да</button>

            </PopupWithForm>

            <PopupWithForm
                title="Обновить аватар"
                name="avatar"
                buttonText="Создать"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}>

                <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                    className="popup__input popup__input_avatar_link" id="avatar-link" required />
                <span className="popup__error  popup__error_avatar-link"></span>

            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
    );
}

export default App;



