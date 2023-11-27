import React from 'react';
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = (props) => {

    // Преобразование каждого элемента массива
    const servicesElement =
        props.services.map(element =>
                <ServicesItem
                    id={element.id}
                    name={element.name}
                    cost={element.cost}
                />

        )

    return (
        <>
            <h2>Склад</h2>
            <div className="content__data">
                {servicesElement}
            </div>
        </>
    );
};

export default Services;