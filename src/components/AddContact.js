import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        name:"",
        email:"",
    }

   add = (e)=>{

   e.preventDefault()
    if(this.state.name === '' || this.state.email === ''){
        alert('All field are required')

        return;
    }
    this.props.addContactHandler(this.state)
    this.setState({name:"",email:""})
   }
  
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>

                        <label>Name</label>  
                        <input type='text' name='name' value={this.state.name} placeholder='name' onChange={(e)=>{this.setState({name : e.target.value})}}></input>
                    </div>
                    <div className='field'>

                        <label>Email</label>  
                        <input type='email' name='email' value={this.state.email} placeholder='email' onChange={(e)=>{this.setState({email: e.target.value})}}></input>
                    </div>
                    <button  className='ui button blue'> ADD</button>
                 
                 </form>
            </div>
        )
    }
}
