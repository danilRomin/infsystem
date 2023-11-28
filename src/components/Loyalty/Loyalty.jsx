import React, {useEffect, useState} from 'react';
import LoyaltyItem from "./LoyaltyItem/LoyaltyItem";
import axios from "axios";

const Loyalty = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get("http://localhost:8888/loyalty");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllData();
    }, []);

// Преобразование каждого элемента массива
    const loyaltyElement =
        data.map(element =>
            <LoyaltyItem
                id={element.id}
                phone={element.phone}
                bonus={element.bonus}
                name={element.name}
                birthday={element.birthday}
                key={element.id}
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