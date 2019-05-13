import React, { useEffect, useState } from 'react'

import './App.css'
import Table from './Table'

const App = () => {
    const [table, setTable] = useState([])
    async function fecthdate() {
        const result = await fetch('http://localhost:3004/data')
        const json = await result.json()
        const back_date = json.back_date;
        const ticket = json.ticket
        //generate table by date from json-server data
        let table = [];
        table.push([{ 'text': '去程回程', 'highlight': 0 }, ...back_date.map(date => ({ 'text': date, 'highlight': 0 }))])
        table.push(...ticket.map(date => {
            let body = [{ 'text': date.date, 'highlight': 0 }], count = 0;
            for (let i = 0; i < back_date.length; i++) {
                let price = "查看";
                if (back_date[i] === date.back[count].date) {
                    price = date.back[count].price;
                    count++;
                }
                body.push({ 'text': price, 'highlight': 0 })
            }
            return body
        }))
        console.log(table)
        setTable(table)
    }
    useEffect(() => {
        fecthdate();
    }, []);


    return (
        <div className='app'>
            {(table.length === 0) ? "Table" :
                <Table table={table} />}
        </div>
    )
};

export default App
