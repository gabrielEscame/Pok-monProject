import React from 'react'

const Button = ({method, label, type, styleName}) => {
return  <button type={type} className={styleName} onClick={method}>{label}</button>
}

export default Button