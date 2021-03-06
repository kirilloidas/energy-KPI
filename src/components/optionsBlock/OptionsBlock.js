import React, { useEffect, useState } from 'react'
import './OptionsBlock.scss'
import CheckMode from '../checkbox/CheckMode'
import CheckOptions from '../checkbox/CheckOptions'
import InputInterval from '../input/InputInterval'
import {setIntervalObj, setCheckBoxObj} from '../../redux/actions/checkBoxParam'
import { connect } from 'react-redux'

const OptionsBlock = ({isDaily, setIntervalObj, setCheckBoxObj, checkBoxObj}) => {
    const [startDay, setStartDay] = useState();
    const [startMonth, setStartMonth] = useState();
    const [startYear, setStartYear] = useState();
    const [startHour, setStartHour] = useState();
    const [endDay, setEndDay] = useState();
    const [endMonth, setEndMonth] = useState();
    const [endYear, setEndYear] = useState();
    const [endHour, setEndHour] = useState();
    let obj = new Object();

    useEffect(() => {
        let obj = {
            startTime: new Date(startYear, startMonth, startDay, startHour || 0).getTime(),
            endTime: new Date(endYear, endMonth, endDay, endHour || 0).getTime(),
        }
        setIntervalObj(obj)
        // console.log(checkBoxObj)
    }, [startDay, startMonth, startYear, startHour, endDay, endHour, endMonth, endYear])

    useEffect(() =>{
        for(let i = 0; i < checkboxArr.length; i++) {
            obj[i] = false
        }
    }, [])
    
    const checkboxArr = [
        'Об`єм (маса) каналу витрати 1',
        'Значення температури ТСП 1 * 100',
        'Значення температури ТСП 2 * 100',
        'Тепло',
        'Час роботи лічильника, год',
        'Час помилок',
        'Введені користувачем константи тиску * 1000',
        'Введені користувачем константи тиску * 1000',
        'Спожита енергія',
        'Температура всередині корпусу'
    ];

    

    const addCheckBoxObj = (value, index) => {
        obj[index] = value;
        console.log(obj)
        setCheckBoxObj(obj)
    }



    return (
        <fieldset className="labels">
            <legend>Параметри</legend>
            <CheckMode />
            {checkboxArr.map((content, index) => (
                <CheckOptions key={index} text={content} onChange={(e) => addCheckBoxObj(e, index)} />
            ))}
            <h3>Початкова дата</h3>
            <div className="start_date">
                <InputInterval placeholderName={'Число'} onChange={(e) => {setStartDay(e); console.log(e)}}/>
                <InputInterval placeholderName={'Місяць'} onChange={setStartMonth}/>
                <InputInterval placeholderName={'Рік'} onChange={setStartYear}/>
                {isDaily ? null : <InputInterval placeholderName={'Години'} onChange={setStartHour}/>}
                
            </div>
            <h3>Кінцева дата</h3>
            <div className="end_date">
                <InputInterval placeholderName={'Число'} onChange={setEndDay}/>
                <InputInterval placeholderName={'Місяць'} onChange={setEndMonth}/>
                <InputInterval placeholderName={'Рік'} onChange={setEndYear}/>
                {isDaily ? null : <InputInterval placeholderName={'Години'} onChange={setEndHour}/>}
            </div>
            <span id="output"></span>
        </fieldset>
    )
}

const mapStateToProps = state => {
    return {
        isDaily: state.checkBoxReducer.isDaily,
        checkBoxObj: state.checkBoxReducer.checkBoxObj
    }
}

const mapDispatchToProps = {
    setIntervalObj,
    setCheckBoxObj
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBlock)