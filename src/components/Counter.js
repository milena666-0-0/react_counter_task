import {useState} from 'react';

import './counter.scss';

const Counter = () => {

    const btnsData = [
        {label: '-', name: 'dec'},
        {label: 'reset', name: 'reset'},
        {label: '+', name: 'inc'},
    ];

    const [counter, setCounter] = useState(0);

    const onChangeCounter = (name) => {

        switch(name) {
            case 'inc':
                return setCounter(counter => counter + 1);
            case 'dec': 
                return setCounter(counter => counter - 1);
            case 'reset': 
                return setCounter(0);
            default: return counter;
        };
    };

    const renderBtns = (data) => {
        const elements = data.map((item, i) => {
            const {label, name} = item;

            return(
                <button
                name={name}
                disabled={name === 'dec' && counter <= 0 ? true : false}
                onClick={() => onChangeCounter(name)}
                className="btn btn-dark">{label}</button>
            );
        });
        return elements;
    };

    const btns = renderBtns(btnsData);
    const evenNum = counter % 2 === 0 && counter !== 0;

    return(
        <div 
        style={{'backgroundColor': evenNum ? 'rgb(243, 127, 127)' : 'rgb(209, 206, 206)'}}
        className="container d-flex flex-column counter">
        <span className="counter__span counter__span-screen">
            {counter}
        </span>
        <span className="counter__span counter__span-even">
            {evenNum ? 'Введено четное число' : '...'}
        </span>
        <div className="counter__btns d-flex justify-content-between">
            {btns}
        </div>
    </div>
    );
};

export default Counter;