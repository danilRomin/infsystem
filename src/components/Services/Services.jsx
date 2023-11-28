import React, {useEffect, useState} from 'react';
import ServicesItem from "./ServicesItem/ServicesItem";
import axios from "axios";

const Services = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get("http://localhost:8888/services");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllData();
    }, []);

    // Преобразование каждого элемента массива
    const servicesElement =
        data.map(element =>
            <ServicesItem
                id={element.id}
                name={element.name}
                cost={element.cost}
            />
        )
    return (
        <>
            <h2>Дополнительные услуги</h2>
            <div className="content__data">
                {servicesElement}
            </div>
        </>
    );
};

export default Services;