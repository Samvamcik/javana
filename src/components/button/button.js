import React from 'react'

import style from './button.css'

export const Button = (props) => (
    <button className={style.button} onClick={() => alert(props.alertText) }>{props.title} </button>
)