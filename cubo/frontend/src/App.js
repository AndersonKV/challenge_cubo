import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Table from './components/Table';
import HeaderText from './components/HeaderText';
 
import './App.css';
import api from './services/api';

 
export default function App() {
 

  return (
      <div className="App">
        <Header/>
        <HeaderText/>
        <Table/>
 	
      </div>
   )
}
