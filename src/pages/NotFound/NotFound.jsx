import React from 'react';
import "./NotFound.css";
import iempty from '../../assets/logos/not_found.png';

const NotFound = () => {
   return (
      <div className="NotFound">
         <img src={iempty} alt="empty" className="empty"/>
         <p>
            Not Found Error 404
         </p>
      </div>
   );
};

export default NotFound;