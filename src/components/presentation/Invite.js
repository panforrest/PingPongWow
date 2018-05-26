import React, { Component } from 'react'

export default (props) => {

  const invite = props.invite

  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">
            <h3>{invite.label}</h3> 
            
            <span class="reservation-date">${invite.date} </span>
        </div>    
      </div>
    </div>
  )
}