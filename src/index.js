import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const count = {
    slide: 1,
    show: 3
}
const speed = .3;
const whenclick = () => {
    console.log('click')
}

ReactDOM.render(<App count={count} speed={speed} whenclick={whenclick}/>, document.getElementById('root'));