import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const count = {
    slide: 3,
    show: 2
}
const speed = 1000;
const whenclick = () => {
    console.log('click')
}

ReactDOM.render(<App count={count} speed={speed} whenclick={whenclick}/>, document.getElementById('root'));