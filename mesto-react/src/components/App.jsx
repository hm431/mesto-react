import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/Api';

function App() {




    
   
   

    const [isEditProfilePopupOpen, changeProfilPopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, changeAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, changePlasePopupOpen] = React.useState(false);
    const [isImagePopupOpen, changeImagePopupOpen] = React.useState(false);

    const [selectedCard, changeSelectedCard] = React.useState('');

    function handleCardClick(card){
        changeSelectedCard(card);
        changeImagePopupOpen(true);
    }


    function handleEditProfileClick(){ 
        changeProfilPopupOpen(true); 
    } 


    function closeAllPopups(){
        changeProfilPopupOpen(false);
        changeAvatarPopupOpen(false);
        changePlasePopupOpen(false);
        changeImagePopupOpen(false);
        changeSelectedCard('');
    }


    function handleEditAvatarClick(){
        changeAvatarPopupOpen(true);
    }

    function handleAddPlaceClick(){
      changePlasePopupOpen(true);
    }





    return (







        <div className="page">

            <Header />

            <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />

            <Footer />




            <PopupWithForm title="Редактировать профиль" name="profil" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>

                <form action="#" method="get" name="profile-form" className="popup__form popup__form_profil" noValidate>
                    <input type="text" name="popupName" placeholder="Имя" id="name"
                        className="popup__input popup__input_name_text" required minLength="2" />
                    <span className="popup__error  popup__error_name "></span>
                    <input type="text" name="popupStatus" placeholder="О себе" className="popup__input popup__input_status_text"
                        id="status" required minLength="2" />
                    <span className="popup__error  popup__error_status"></span>
                    <button type="submit" className="popup__save">Сохранить</button>
                </form>

            </PopupWithForm>


            <PopupWithForm title="Новое место" name="place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <form action="#" method="get" name="card-form" className="popup__form popup__form_place" noValidate>


                    <input type="text" name="popupName" placeholder="Название" className="popup__input popup__input_place_text"
                        required minLength="2" id="text" />


                    <span className="popup__error  popup__error_text "></span>



                    <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                        className="popup__input popup__input_place_link" id="url" required />

                    <span className="popup__error  popup__error_url"></span>

                    <button type="submit" className="popup__save popup__save_place">Создать</button>

                </form>
            </PopupWithForm>


            <PopupWithForm title="Вы уверены?" name="delite" onClose={closeAllPopups}>
                <form action="#" method="get" name="delite-form" className="popup__form popup__form_delite" noValidate>

                    <button type="submit" className="popup__save popup__save_delite">Да</button>
                </form>

            </PopupWithForm>

            <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <form action="#" method="get" name="avatar-form" className="popup__form popup__form_avatar" noValidate>



                    <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                        className="popup__input popup__input_avatar_link" id="avatar-link" required />
                    <span className="popup__error  popup__error_avatar-link"></span>

                    <button type="submit" className="popup__save popup__save_avatar">Создать</button>

                </form>

            </PopupWithForm>



            <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen}/>

            
                
          






        </div>



    );
}

export default App;



