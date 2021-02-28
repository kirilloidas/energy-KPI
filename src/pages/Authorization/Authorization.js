import React from 'react'
import './Authorization.scss'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import ReactIsCapsLockActive from '@matsun/reactiscapslockactive'
import Timer from '../../components/timer/Timer'
import CapsBlock from '../../components/capsBlock/CapsBlock'

const Authorization = () => {

    return (
        <div className="Authorization">
            <h1 className="authorization_title">Авторизація</h1>
            <form action="/authorization" method="POST">
                <fieldset className="clearfix">
                    <Timer />
                    <Input 
                        name = "Логін"
                    />
                    <Input 
                        name = "Пароль"
                    />
                    <ReactIsCapsLockActive>
                     {active => active ? <CapsBlock/> : null}
                    </ReactIsCapsLockActive>
                    <Button/>
                </fieldset>
            </form>
        </div>
        
    )
}

export default Authorization