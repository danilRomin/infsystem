import React, {useEffect, useState} from 'react';
import WarehouseItem from "./WarehouseItem/WarehouseItem";
import axios from "axios";

const Warehouse = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get("http://localhost:8888/warehouse");
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllData();
    }, []);


    // Преобразование каждого элемента массива
    const warehouseElement =
        data.map(element =>
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
            <div className="content__data" key={data.id}>
                {warehouseElement}
            </div>
        </>
    );
};

export default Warehouse;