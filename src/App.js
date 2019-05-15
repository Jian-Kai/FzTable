import React, { useEffect, useState } from 'react'

import './App.css'
import Table from './Table'
import Arrow from './Arrow'

const App = ({ count, speed, whenclick }) => {
    //console.log(count, speed, whenclick)
    const [table, setTable] = useState([])
    const [size, setSize] = useState(getSize)
    const [showRow, setShowRow] = useState({ start: 0, end: 7 })
    const [load, setLoad] = useState(null)

    //fetch data
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

    function handleWindowChange() {

        if (document.body.clientWidth >= 769) {
            setShowRow({ start: 0, end: 6 });
        }
        else {
            if (count.show > 4) count.show = 4
            if (count.show <= 0) count.show = 1
            setShowRow({ start: 0, end: count.show - 1 });
        }
        setSize(getSize)
    };

    function getSize() {
        return (document.body.clientWidth);
    }

    useEffect(() => {
        if (table.length === 0)
            fecthdate();
        handleWindowChange();
        window.addEventListener('resize', handleWindowChange);
        //return () => window.addEventListener('resize', handleShowRange)
    }, []);

    let head = table.map(context => context[0]);
    function fillBody() {
        let temp_body = [];
        for (let i = 1; i < head.length; i++) {
            let temp = [];
            for (let j = 0; j < table.length; j++) {
                temp.push(table[j][i]);
            }
            temp_body.push(temp);
        }
        return (temp_body)
    }

    function slide(value) {
        let newshowRow = { ...showRow };

        newshowRow.start = (newshowRow.start + value * count.slide < 0) ? 0 : newshowRow.start + value * count.slide;
        newshowRow.end = (newshowRow.end + value * count.slide < 6) ? newshowRow.end + value * count.slide : 6;
        if (newshowRow.end - newshowRow.start < count.show - 1 && value > 0)
            newshowRow.start = newshowRow.end - (count.show - 1)
        if (newshowRow.end - newshowRow.start < count.show - 1 && value < 0)
            newshowRow.end = newshowRow.start + (count.show - 1)
        setLoad({...newshowRow})
        setShowRow(newshowRow)
    }


    return (
        <div className='app'>

            {
                (table.length > 0) ? <Table thead={head} tbody={fillBody} size={size} count={count} showRow={showRow} load={load}/> : ''
            }
            {
                (showRow.end < 6) ? <Arrow direction={'right'} position={size - 20 + (count.show + 1)} slide={slide} /> : ''
            }
            {
                (showRow.start > 0) ? <Arrow direction={'left'} position={88 + 1} slide={slide} /> : ''
            }
        </div>
    )
};

export default App
