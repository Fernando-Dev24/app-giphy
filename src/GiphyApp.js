import React from 'react';
import WebFont from 'webfontloader';
/* Components */
import { Title } from './components/Title';
import { PhotoGrid } from './components/PhotoGrid';

export const GiphyApp = () => {
   WebFont.load({
      google: {
         families: ['Poppins:300,400,600']
      }
   });

   return (
      <main className="grid">
         <Title />
         <PhotoGrid />
      </main>
   );
};