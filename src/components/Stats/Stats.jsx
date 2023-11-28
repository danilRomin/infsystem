import React, {useEffect, useState} from 'react';
import StatsItem from "./StatsItem/StatsItem";
import axios from "axios";

const Stats = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get("http://localhost:8888/stats");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllData();
    }, []);

    // Преобразование каждого элемента массива
    const statsElement =
        data.map(element =>
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