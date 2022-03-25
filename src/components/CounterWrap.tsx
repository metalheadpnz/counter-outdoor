import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import Settings from "./Settings";

export type settingsType = {
    START_VALUE: number
    MAX_VALUE: number
}

const CounterWrap = () => {
    const [settings, setSettings] = useState({
        START_VALUE: 0,
        MAX_VALUE: 5
    } as settingsType)


    const [counter, setCounter] = useState(settings.START_VALUE)
    const incrementCounter = () => {
        counter < settings.MAX_VALUE &&
        setCounter(counter + 1)
    }

    const [error, setError] = useState(null as null | string)
    const saveSettings = (startValue: number, maxValue: number) => {
        if (startValue < maxValue) {
            setError(null)
            setSettings({
                START_VALUE: startValue,
                MAX_VALUE: maxValue
            })
            setCounter(settings.START_VALUE)
        } else {
            setError('incorrect start or max Value')
        }

    }

    const resetCounter = () => {
        setCounter(settings.START_VALUE)
    }

    useEffect(() => {
        const LS = localStorage.getItem('settings')
        if (LS) {
            const parsedLS = JSON.parse(LS)
            setSettings(parsedLS)
            setCounter(parsedLS.START_VALUE)
        }
    }, [])

    useEffect(() => {
        // setCounter(settings.START_VALUE)
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])


    return (
        <div className={'counterAppWrap'}>
            <Counter
                counter={counter}
                incrementCounter={incrementCounter}
                resetCounter={resetCounter}
                stopCount={counter >= settings.MAX_VALUE}/>
            <Settings setSettings={setSettings}
                      error={error}
                      saveSettings={saveSettings}
                      settings={settings}/>
        </div>
    );
};

export default CounterWrap;