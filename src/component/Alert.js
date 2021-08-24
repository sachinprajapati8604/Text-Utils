import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&     <div>
          <div id="myalert" class={`alert alert-${props.alert.type} alert-dismissible" role="alert" id="liveAlert`} >
               <p style={{ color: props.mode === 'light' ? 'white' : 'black' }}>  <strong >{props.alert.type}     </strong> {props.alert.msg}</p>
            </div>
        </div>
    )
}
