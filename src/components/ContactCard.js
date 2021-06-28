import React from 'react'

export default function ContactCard(props) {
    const {id,name,email} = props.contact;
    return (
        <div className='item'>
                    <div className='content'>
                        <div className='header'>{name} </div>
                        <div >{email} </div>
                    </div>
                    <i className='trash alternate outline icon' style={{color:"red",marginTop:"-20px",float:"right"}} onClick={() =>props.clickHandler(id)}></i>
        </div>
    )
}
