import React, {useEffect} from 'react';

type propsType = {
    counter: number
    incrementCounter: () => void
    resetCounter: () => void
    stopCount: boolean
}
const Counter: React.FC<propsType> = (
    {
        counter,
        incrementCounter,
        resetCounter,
        stopCount
    }) => {

    return (
        <div className={'Wrap'}>
            <div className={'displayWrap'}>
                <h2 className={`display ${stopCount ? 'redText' : ''}`}>{counter}</h2>
            </div>
            <div className={'counterButtonsWrap'}>
                <button className={'btn'}
                        onClick={incrementCounter}
                        disabled={stopCount}>inc
                </button>
                <button className={'btn'}
                        onClick={resetCounter}>reset
                </button>
            </div>

        </div>
    );
};

export default Counter;