import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
/* Contexts */
import { useGiphyContext } from '../contexts/GiphyContext';
/* Icons */
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

/* Styles share buttons */
const WhatsAppButton = styled(WhatsappShareButton)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-bottom: 0.625rem !important; /* 10px */ 
   padding: 0.625rem 1.25rem !important; /* 10px 20px */
   border-radius: 5px;
   font-size: 1rem; /* 16px */
   background: #121212 !important;
   color: #fff !important;
   cursor: pointer;
   transition: all .3s ease;
   &:hover {
      background: #25D366 !important;
   }
`;

const FacebookButton = styled(FacebookShareButton)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-bottom: 0.625rem !important; /* 10px */ 
   padding: 0.625rem 1.25rem !important; /* 10px 20px */
   border: 1px solid red;
   border-radius: 5px;
   font-size: 1rem; /* 16px */
   background: #121212 !important;
   color: #fff !important;
   cursor: pointer;
   transition: all .3s ease;
   &:hover {
      background: #3B5998 !important;
   }
`;

export const PhotoGrid = () => {
   const { gifs } = useGiphyContext();

   return (
      <section className="photo-grid">
         {gifs.map(( gif ) => {
            return(
               <article className="gif" key={gif.id}>
                  <img
                     src={gif.images.downsized.url}
                     alt={gif.title}
                  />
                  <div className="gif__share">
                     <WhatsAppButton url={gif.url}>
                        WhatsApp
                        <FaWhatsapp />
                     </WhatsAppButton>
                     <FacebookButton url={gif.url}>
                        Facebook
                        <FaFacebook />
                     </FacebookButton>
                  </div>
               </article>
            );
         })}
      </section>
   );
};