import React from 'react';
import LoyaltyItem from "./LoyaltyItem/LoyaltyItem";

const Loyalty = (props) => {

    const loyaltyElement =
        props.loyalty.map(element =>
            <LoyaltyItem
                id={element.id}
                phone={element.phone}
                bonus={element.bonus}
                name={element.name}
                birthday={element.birthday}
            />
        )

    return (
        <>
            <h2>Программа лояльности</h2>
            {loyaltyElement}
        </>
    );
};

export default Loyalty;