import React from 'react'

export default function Alert(props) {
    const capatalize=(word)=>{
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (

//     <div class="alert alert-warning" role="alert">
//   A simple warning alert—check it out!
// </div>
      <div style={{height: '70px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatalize(props.alert.type)}: </strong>{props.alert.msg}
      </div>}
      </div>
  )
}
