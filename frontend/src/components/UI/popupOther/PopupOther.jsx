import React from 'react'
import "./style/PopupOther.css"

function PopupOther({addCartClass, text}) {
  return (
	<div className={addCartClass}>
	<p>{text}</p>
  	</div>
  )
}

export default PopupOther;