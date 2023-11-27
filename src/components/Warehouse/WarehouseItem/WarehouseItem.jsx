import React from 'react';

const WarehouseItem = (props) => {


    return (
        <>
            <ul className="dataItem">
                <li className="dataItem__name">ID</li>
                <li>{props.id}</li>
                <li className="dataItem__name">name</li>
                <li>{props.name}</li>
                <li className="dataItem__name">cost</li>
                <li>{props.cost}</li>
                <li className="dataItem__name">quantity</li>
                <li>{props.quantity}</li>
            </ul>
        </>
    );
};

export default WarehouseItem;