import React, { Component } from 'react'

export default (props) => {

  const invite = props.invite

  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">

                <div style={localStyle.inviteImage}>
                    <a onClick={props.onPurchase.bind(this)} herf="#">  
                        <img style={localStyle.inviteImage} src={invite.image+'=s200-c'} />
                    </a>
                </div>
                <h2>{invite.label}</h2> 
                
                <span class="reservation-date">{invite.date} </span>
                <img style={localStyle.icon} src={invite.host.image} />
                <p>by: {invite.host.username} </p>
                <div>

                    

                
            </div>
            

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