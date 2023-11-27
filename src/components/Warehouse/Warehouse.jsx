import React from 'react';
import WarehouseItem from "./WarehouseItem/WarehouseItem";

const Warehouse = (props) => {

    // Преобразование каждого элемента массива
    const warehouseElement =
        props.data.map(element =>
                <WarehouseItem
                    id={element.id}
                    name={element.name}
                    cost={element.cost}
                    quantity={element.quantity}
                />

        )

    return (
        <>
            <h2>Склад</h2>
            <div className="content__data">
                {warehouseElement}
            </div>
        </>
    );
};

export default Warehouse;