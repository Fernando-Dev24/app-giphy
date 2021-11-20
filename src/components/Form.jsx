import React, { useState } from 'react';
/* Contexts */
import { useGiphyContext } from '../contexts/GiphyContext';

export const Form = () => {
   /* Contexts variables */
   const { setGifs } = useGiphyContext();

   /* State variables */
   const [gifSearchValue, setGifSearchValue] = useState('');

   /* API variables */
   const API_KEY = process.env.REACT_APP_API_KEY;
   const API_SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

   /* handleSubmit */
   const handleSubmit = async (e) => {
      e.preventDefault();

      /* Validation */
      if(gifSearchValue === '') {
         return;
      }

      try {
         const response = await fetch(`${API_SEARCH_ENDPOINT}&q=${gifSearchValue}&limit=15`);
         const { data } = await response.json();
         setGifs(data);
         setGifSearchValue('');
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <form className="form" onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Search a Giphy"
            value={gifSearchValue}
            onChange={({ target }) => setGifSearchValue(target.value) }
         />
      </form>
   );
};