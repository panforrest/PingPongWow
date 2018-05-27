import React, { Component } from 'react'

export default (props) => {

  const invite = props.invite

  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">

            <div style={localStyle.inviteImage}>
                <img style={localStyle.inviteImage} src={invite.image} />
            </div>
            <h2>{invite.label}</h2> 
            <span class="reservation-date">{invite.date} </span>
            <img style={localStyle.icon} src={invite.host.image} />
            

        </div>    
      </div>
    </div>
  )
}

const localStyle = {
    icon: {
        width:28, 
        borderRadius:14, 
        float:'right'
    },
    inviteImage: {
        width:100+'%',
        padding:3,
        // border:'1px solid #ddd',
        background:'#ffffa' 
    }
}