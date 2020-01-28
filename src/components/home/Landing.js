import React from 'react';
import './landing.scss';

export default function Landing() {

  return (
      <div className="essay-container">
        <div className="form">
          <div className="title" >
            <input type="text" placeholder="Escreva aqui seu titulo"/>
          </div>
          <div className="essay">
            <textarea rows="25"/>
          </div>
        </div>
      </div>
  );
}

