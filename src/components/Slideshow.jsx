import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import './style/Slideshow.sass';
import { useParams } from 'react-router-dom';
import { openDescription } from './components';
import { closeDescription } from './components';
import { openEquipments } from './components';
import { closeEquipments } from './components';
import logementDatas from './Data/logements.json';


function SlideComponent() {
    const idUrl = useParams().id;


    const logementToDisplay = logementDatas.find(logement => logement.id === idUrl); 
    
    //Rechercher dans les logements et selectionner l'id specifiquement

    if (!logementToDisplay) {
        return <Navigate to="*" />;
      }
      // Rediriger vers la page d'erreur si l'id n'existe pas

    return (
        <div id='slideBlocks'>
            <Slide 
            key={logementToDisplay.id} 
            title={logementToDisplay.title} 
            pictures={logementToDisplay.pictures} 
            description={logementToDisplay.description} 
            name={logementToDisplay.name} 
            picture={logementToDisplay.host.picture} 
            rating={logementToDisplay.rating} 
            ville={logementToDisplay.location.split(' - ')[0]} 
            arrondissement={logementToDisplay.location.split(' - ')[1]} 
            équipements={logementToDisplay.equipments} 
            tags={logementToDisplay.tags} 
            />
        </div>
        //Afficher les données spécifique du slide selectionné par son id
    );
       
}


function Slide({ title, pictures, description, name, picture, rating, ville, arrondissement, équipements, tags }) {
    const [imageIndex,setimageIndex] = useState(0);

    const clicImageSuivante = () => {
        setimageIndex((imageIndex + 1) % pictures.length);
    };
    
    const clicImagePrecedente = () => {
        setimageIndex((imageIndex - 1 + pictures.length) % pictures.length);
    };
    
// Met a jour l'image en augmentant et baissant l'index de 1 et s'assure qu'on reste dans le nombres d'images disponibles avec le %
    
    const [countPicture,setCountPicture] = useState(1);

    const nextPicture = () => {
        setCountPicture((countPicture % pictures.length) + 1);
      };
      
      const backPicture = () => {
        setCountPicture((countPicture - 1 + pictures.length) % pictures.length);
      };
      
        return (
            <div id='slideBlock'>
                <div id="block-1">
                <div id='pictures'>
                {pictures.map((imageUrl, index) => (
                <div key={index} className={`image-container ${index === (countPicture - 1) ? '' : 'autre-image'}`}>
                    <div id='img'> <img src={imageUrl} alt={`Image ${index + 1}`} /> </div>
                    {(pictures.length > 1) && (
                    <React.Fragment>
                        <i className="fa-solid fa-chevron-left flecheGauche" onClick={backPicture}></i>
                        <i className="fa-solid fa-chevron-right flecheDroite" onClick={nextPicture}></i>
                        <p id='counterPicture'>{countPicture}/{pictures.length}</p>
                    </React.Fragment>
                    )}
                </div>
                ))}
            </div>
            </div>
                <div id="block-2">
                    <div id="title">{title}</div>
                    <div id='block-2bis'>
                    <div id="name">{name}</div>
                    <img src={picture} id="picture" alt={`Profile`} />
                    </div>
                </div>
                <div id="block-3">
                    <div id="ville">{ville}</div>
                </div>
                <div id="block-4">
                    <div id='block-4bis'>
                    <div id="tags">
                        {tags.map((tag, index) => (
                        <div key={index} className="tag">{tag}</div>
                        ))}
                    </div>
                    <div id="arrondissement">{arrondissement}</div>
                    </div>
                    <div id="rating">
                        <Rating rating={rating}/>
                    </div>
                </div>
                <div id='responsive'>
                    <div id="ratingBis">
                        <Rating rating={rating}/>
                        <div id='responsiveBis'>
                        <div id="nameBis">{name}</div>
                        <img src={picture} id="pictureBis" alt={`Profile`} />
                        </div>
                    </div>

                </div>
                <div id="block-5">
                    <div id='descriptionBlock'>
                        <div id='description'>
                            <h1>Description</h1>
                            <i className="fa-solid fa-angle-up " id='upDescription' onClick={openDescription}></i>
                            <i className="fa-solid fa-angle-down downDescription" id='downDescription' onClick={closeDescription}></i>
                        </div>
                        <div id="ParagrapheDescription">{description}</div>
                    </div>

                    <div id='equipmentsBlock'>
                        <div id='equipments'>
                            <h1>Equipements</h1>
                            <i className="fa-solid fa-angle-up upEquipments" id='upEquipments' onClick={openEquipments}></i>
                            <i className="fa-solid fa-angle-down downEquipments" id='downEquipments' onClick={closeEquipments}></i>
                        </div>
                        <div id="ParagrapheEquipments">{équipements.join(" / ")}</div>
                        </div>
                        </div>
                    </div>
    
                        
        );
    }

function Rating(props) {
    return (<div id='etoiles'>
       { (1 <= props.rating) ? <i className="fa-solid fa-star color-red"></i> : <i className="fa-solid fa-star color-grey"></i> }
       { (2 <= props.rating) ? <i className="fa-solid fa-star color-red "></i> : <i className="fa-solid fa-star color-grey"></i> }
       { (3 <= props.rating) ? <i className="fa-solid fa-star color-red"></i> : <i className="fa-solid fa-star color-grey"></i> }
       { (4 <= props.rating) ? <i className="fa-solid fa-star color-red"></i> : <i className="fa-solid fa-star color-grey"></i> }
       { (5 <= props.rating) ? <i className="fa-solid fa-star color-red"></i> : <i className="fa-solid fa-star color-grey"></i> }
    </div>)

}
// La couleur rouge est proportionnelle au nombre de rating, la couleur grise est utilisé pour les etoiles restantes
export default SlideComponent;