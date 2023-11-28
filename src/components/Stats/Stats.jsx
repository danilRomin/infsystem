import React from 'react';
import StatsItem from "./StatsItem/StatsItem";

const Stats = (props) => {

    // Преобразование каждого элемента массива
    const statsElement =
        props.data.map(element =>
            <StatsItem
                id={element.id}
                name={element.name}
                cost={element.cost}
                quantitySales={element.quantitySales}
            />
        )

    return (
        <>
            <h2>Продано за месяц</h2>
            <div className="content__data">
                {statsElement}
            </div>
        </>
    );
};

export default Stats;