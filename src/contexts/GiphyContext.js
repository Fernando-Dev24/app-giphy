import React, { useState, useEffect, useContext, useCallback } from 'react';

const GiphyContext = React.createContext();
const useGiphyContext = () => useContext(GiphyContext);

const GiphyProvider = ({ children }) => {
   /* States variables */
   const [gifs, setGifs] = useState();
   const [loading, setLoading] = useState(true);

   /* Api variables */
   const API_KEY = process.env.REACT_APP_API_KEY;
   const API_ENPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15`;

   /* getGifs */
   const getGifs = useCallback(async () => {
      const response = await fetch(API_ENPOINT);
      const { data } = await response.json();
      
      /* Saving gifs in the array */
      setGifs(data);
      setLoading(false);
   }, [API_ENPOINT]);
   
   /* Fetching data from Giphy API */
   useEffect(() => {
      getGifs();
   }, [getGifs])

   return(
      <GiphyContext.Provider value={{ gifs: gifs, setGifs: setGifs }}>
         { !loading && children }
      </GiphyContext.Provider>
   );
};

export { useGiphyContext, GiphyProvider };