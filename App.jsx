import React, { useState, useEffect } from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      first_name={contact.first_name}
      last_name={contact.last_name}
      img={contact.avatar}
      gender={contact.gender}
      domain={contact.domain}
      available={contact.available}
      email={contact.email}
    />
  );
}






function App() {
  return (
    <div>
      <h1 className="heading">Users List</h1>
      <div className="main" >
      
    </div>
      <input type="text" placeholder="search here"></input>
      <div className="card-grid">
      {contacts.map(createCard)}
      </div>
      <div>
        
      </div>
    </div>
    
  );
}

export default App;
