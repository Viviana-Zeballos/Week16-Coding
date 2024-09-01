import React from 'react';
import Switzerland from '../images/Switzerland.JPG'; 
import Italy from '../images/Italy.JPG'; 
import Amesterdam from '../images/Amsterdam.JPG'; 
import Poland from '../images/Poland.png'; 
import Prague from '../images/Prague.png'; 
import Vienna from '../images/Vienna.png'; 
import Budapest from '../images/Budapest.png'; 
import Colombia from '../images/Colombia.jpg'; 
import Peru from '../images/Peru.jpg'; 
import London from '../images/London.jpg'; 
import '../GalleryPage.css'; 

function AgenciesPage() {
  return (
    <div className='gallery-container'>
      <img src={Switzerland} alt="Switzerland" className="gallery-image"/>
      <img src={Italy} alt="Italy" className="gallery-image"/>
      <img src={Amesterdam} alt="Amsterdam" className="gallery-image"/>
      <img src={Poland} alt="Poland" className="gallery-image"/>
      <img src={Prague} alt="Prague" className="gallery-image"/>
      <img src={Vienna} alt="Vienna" className="gallery-image"/>
      <img src={Budapest} alt="Budapest" className="gallery-image"/>
      <img src={Colombia} alt="Colombia" className="gallery-image"/>
      <img src={Peru} alt="Peru" className="gallery-image"/>
      <img src={London} alt="London" className="gallery-image"/>
    </div>
  );
}

export default AgenciesPage;