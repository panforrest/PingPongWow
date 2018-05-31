import React, { Component } from 'react'
import { DateUtils } from '../../utils'

export default (props) => {

  const invite = props.invite
  // var label = invite.label || []
  // var str = label.substring(0, 2)

  var label = invite.label || []
  var label = (label.length==0) ? "  Play Ping Pong with me!" : "  "+label 
  var str = (label.length > 38) ? label.substring(0, 38) : label

  // { (this.state.invite.image == null) ? null: <img src={this.state.invite.image+'=s120-c'} />
                // }
  var image = invite.image || null
  var image = (image == null) ? 'https://lh3.googleusercontent.com/vdvyMK6zaR2sK_roKF-tDS8_ZJRzkq7k2lTkeI8XTRINe1YBWVSzsdaIcFP9tPAjqXetnixLkb9VdhPATpmxIKJs3w' : image


  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">

                <div style={localStyle.inviteImage}>
                    <a onClick={props.onPurchase.bind(this)} herf="#">  
                        <img style={localStyle.inviteImage} src={image+'=s200-c'} />
                    </a>
                </div>
                <p>{str}</p> 
                
                <span class="reservation-date">start: {DateUtils.formattedDate(invite.startDate)} </span>
                <img style={localStyle.icon} src={invite.host.image} />
                <p>hosted by: {invite.host.username} </p>
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
        // width:100+'%',
        width:105,
        padding:10,
        // border:'1px solid #ddd',
        background:'#ffffa' 
    }
}