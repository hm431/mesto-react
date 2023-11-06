function Card({onCardClick, card}){


    function handleClick() {
        onCardClick(card);
      }  



    return(
       
            <div className="element">
                <img src={card.link} alt={card.name} className="element__img" onClick={handleClick} />
                <button className="element__delite"></button>
                <div className="element__text">
                    <h2 className="element__header">{card.name}</h2>
                    <div className="element__like">
                        <button type="button" className="element__like_button"></button>
                        <h3 className="element__like_number">{card.likes.length}</h3>
                    </div>
                </div>
            </div>
    )
}


export default Card;