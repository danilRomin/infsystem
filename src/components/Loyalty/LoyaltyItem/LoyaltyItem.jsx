import React from 'react';

const LoyaltyItem = (props) => {
    return (
        <>
            <ul className="dataItem">
                <li className="dataItem__name">ID</li>
                <li>{props.id}</li>
                <li className="dataItem__name">phone</li>
                <li>{props.phone}</li>
                <li className="dataItem__name">bonus</li>
                <li>{props.bonus}</li>
                <li className="dataItem__name">name</li>
                <li>{props.name}</li>
                <li className="dataItem__name">birthday</li>
                <li>{props.birthday}</li>
            </ul>
        </>
    );
};

export default LoyaltyItem;