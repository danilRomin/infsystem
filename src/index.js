import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
    {id: 1, name: "iphone 17", cost: 120000, quantity: 100},
    {id: 2, name: "Samsung Z", cost: 89000, quantity: 92},
    {id: 3, name: "Realme Gt", cost: 35000, quantity: 88},
]

const services = [
    {id: 1, name: "Установка стекла", cost: 500,},
    {id: 2, name: "Установка пленки", cost: 250,},
    {id: 3, name: "Страховка", cost: "10% от суммы товара",},
    {id: 4, name: "Консультация", cost: 200,},
    {id: 5, name: "Установка сим-карты", cost: 100,},
]

root.render(
    <App
        data={data}
        services={services}
    />
);