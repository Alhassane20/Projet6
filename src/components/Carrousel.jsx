import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import picturesDatas from './Data/logements.json';
import './style/Carrousel.sass';

function CarrouselComponent() {
    const picturesUrl = useParams().id;
    const picturesToDisplay = picturesDatas.find(pictures => pictures.id === picturesUrl); 

    return(
        <div id='slidePictures'>
            <CarrouselSlide 
            pictures={picturesToDisplay.pictures} 
            />
        </div>
        );
}
export default CarrouselComponent


function CarrouselSlide({ pictures }) {
  const [countPicture, setCountPicture] = useState(0);

  const nextPicture = () => {
    setCountPicture((countPicture + 1) % pictures.length);
  };

  const backPicture = () => {
    setCountPicture((countPicture - 1 + pictures.length) % pictures.length);
  };

  return (
    <div id="block-1">
      <div id='pictures'>
        {pictures.map((imageUrl, index) => (
          <div key={index} className={`image-container ${index === countPicture ? '' : 'autre-image'}`}>
            <div id='img'> <img src={imageUrl} alt={`Image ${index + 1}`} /> </div>
            {(pictures.length > 1) && (
              <React.Fragment>
                <i className="fa-solid fa-chevron-left flecheGauche" onClick={backPicture}></i>
                <i className="fa-solid fa-chevron-right flecheDroite" onClick={nextPicture}></i>
                <p id='counterPicture'>{countPicture + 1}/{pictures.length}</p>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


