import React from 'react';
/* Components */
import { Form } from './Form';

export const Title = () => {
   return (
      <section className="title">
         <article className="title__container">
            <h1>Giphy App</h1>
            <p>This app was created using React and Giphy API. Develop by <strong>Fernando Ortiz</strong>.</p>
            <p>Copyright {new Date().getFullYear()}. All rights reserved</p>
            <Form />
         </article>
      </section>
   )
};