import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
    {id: 1, name: "iphone 17", cost: 120000, quantity: 100, quantitySales: 10},
    {id: 2, name: "Samsung Z", cost: 89000, quantity: 92, quantitySales: 8},
    {id: 3, name: "Realme Gt", cost: 35000, quantity: 88, quantitySales: 12},
    {id: 4, name: "Xiomi", cost: 10000, quantity: 10, quantitySales: 90},
]

const services = [
    {id: 1, name: "Установка стекла", cost: 500,},
    {id: 2, name: "Установка пленки", cost: 250,},
    {id: 3, name: "Страховка", cost: "10% от суммы товара",},
    {id: 4, name: "Консультация", cost: 200,},
    {id: 5, name: "Установка сим-карты", cost: 100,},
]


const loyalty = [
    {id: 1, name: "Ромин Даниил Витальевич", bonus: 500, phone: 89293747360, birthday: "21.11.2004"},
    {id: 2, name: "Линникова Елизавета Дмитриевна", bonus: 1000, phone: 89528881488, birthday: "19.04.2006"},
]

root.render(
    <App
        data={data}
        services={services}
        loyalty={loyalty}
    />
);