import React, { useState } from 'react';
import api from '../services/api';
import '../App.css';

export default function Header() {
	const [name, setName] = useState('');
  	const [lastName, setLastName] = useState('');
  	const [y, setY] = useState('');

  	async function handleSubmit(event) {
      event.preventDefault();

      const clean = document.querySelectorAll('input');

      //verifica se o valor da participation (y) é um numero
      function isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n); }

      //verifica se name e lastname é maior que 0
      if(name.length > 0 & lastName.length > 0 & isNumber(y) === true) {
         const response = await api.post('/users/', { name, lastName, y})
         console.log(response)
         for (let i = 0; i < clean.length; i++) { clean[i].value='' }
         window.location.reload(false); 

      } else { alert('escreva corretamente') }

     }

   	return(
	  <div className="div-form">
		 <form onSubmit={handleSubmit}>
           <input 
              id="firstName" 
              type="firstName" 
              placeholder="First name"
              value={name}
              onChange={event => setName(event.target.value)}/>

              <input 
              id="lastName" 
              type="lastName" 
              placeholder="Last name"
              value={lastName}
              onChange={event => setLastName(event.target.value)}/>

              <input 
              id="participation" 
              type="participation" 
              placeholder="Participation"
              value={y}
              onChange={event => setY(event.target.value)}/>

              <button className="form-btn" type="submit">SEND</button>
      	 </form>
		</div>
	)
}
