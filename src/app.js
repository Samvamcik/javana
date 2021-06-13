import React from 'react'

import style from './style.css'
import Button from './components/button'


const App = () => {
    return (
        <div className={style.test}>
            <p>
                Геля в параграфе
            </p>
            <Button title="Нажми меня" alertText="Спасибо что нажали!"/>
            <Button title="Нажми меня2" alertText="Понятно" />
            <Button title="Нажми меня3" alertText="Завязывай кликать"/>
        </div>
    )
}

export default App