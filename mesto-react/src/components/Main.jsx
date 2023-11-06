import { api } from "../utils/Api";
import React, { useEffect } from "react";
import Card from "./Card";


function Main({onCardClick, onEditProfile, onAddPlace, onEditAvatar}){

         

    
        const [userName, changeUserName] = React.useState('');
        const [userDescription, changeUserDescription] = React.useState('');
        const [userAvatar, changeUserAvatar] = React.useState('');
        const [cards, changeCardsArray] = React.useState([]);

    useEffect(() =>{    
    api.getUserInfo()
    .then((info)  =>{
        
        changeUserName(info.name);
        changeUserDescription(info.about);
        changeUserAvatar(info.avatar);
    })
    .catch((err)=>{             //попадаем сюда если один из промисов завершится ошибкой 
        console.log(err);
         })

  

    
    api.getCards()
    .then((list)  =>{
        changeCardsArray(list);
    })
    .catch((err)=>{             //попадаем сюда если один из промисов завершится ошибкой 
        console.log(err);
         });
}, []);



    


    return(
        <main className="main">
        <section className="profile">
            <button type="button" alt="Аватар" onClick={onEditAvatar} className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
                <div className="profile__hover"></div>
            </button>
            <div className="profile__info" >
                <div className="profile__name-bloc">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
                </div>
                <h2 className="profile__status">{userDescription}</h2>
            </div>
            <button type="button" onClick={onAddPlace} className="profile__add-button"></button>

        </section>

        <section className="elements">
         { cards.map(card =>(
                <Card key={card._id} onCardClick={onCardClick} card={card}/>
                ))}
        </section>
    </main>
    );
}

export default Main;