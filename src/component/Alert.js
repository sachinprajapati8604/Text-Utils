import React from 'react'

export default function Alert(props) {
    return (
          <div className="alert-box">
          {  props.alert &&    <div id="myalert" class={`alert alert-${props.alert.type} alert-dismissible" role="alert" id="liveAlert`} style={{ backgroundColor: props.mode === 'dark' ? '#8cd545' : '#8cd545' }}>
               <p style={{ color: props.mode === 'light' ? 'white' : 'black' }}>  <strong >{props.alert.type}     </strong> {props.alert.msg}</p>
            </div>}
        </div>
    )
}
