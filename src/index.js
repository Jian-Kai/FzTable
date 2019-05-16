import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const count = {
    slide: 1,
    show: 2
}
const speed = .5;
const whenclick = (ele) => {
    console.log('click')
    console.log(ele.target)
}

ReactDOM.render(<App count={count} speed={speed} whenclick={whenclick}/>, document.getElementById('root'));