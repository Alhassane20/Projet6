import React from 'react';
import './style/Card.sass';
import { Link } from 'react-router-dom';


function CardComponent() {
    const cartesDatas = [
        { id: "c67ab8a7", titre: "Appartement cosy", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" },
        { id: "b9123946", titre: "Magnifique appartement proche Canal Saint Martin", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" },
        { id: "46d188c5", titre: "Studio de charme - Buttes Chaumont", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg" },
        { id: "7af00cd6", titre: "Nid douillet au coeur du 11ème", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg" },
        { id: "0979876d", titre: "Appartement de Standing - 10e", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg" },
        { id: "f72a452f", titre: "Studio d'artiste", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg" },
        { id: "b4c67936", titre: "Cheap - Studio 18ème", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg" },
        { id: "bc6f7112", titre: "Superbe appartement proche Tour Eiffel", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg" },
        { id: "cb2f9222", titre: "Suite familiale", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg" },
        { id: "d60ca600", titre: "Appartement moderne sur parc", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg" },
        { id: "2cf259e1", titre: "Charmant Studio Marais", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg" },
        { id: "2cf259e1", titre: "Studio fonctionnel République", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg" },
        { id: "af6d2d48", titre: "Bungalow dans la forêt", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg" },
        { id: "7cbb378e", titre: "Grande Maison proche banlieue", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg" },
        { id: "ba55a0cc", titre: "Maison T5 - Le Vésinet", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg" },
        { id: "1e181317", titre: "Loft de Luxe à la Défense", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg" },
        { id: "1e180563", titre: "Charmant apt aux portes de Paris", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg" },
        { id: "2139a317", titre: "Cheap - Chambre Paris 20", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg" },
        { id: "6ff132c6", titre: "Charmant studio", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg" },
        { id: "cb02d69b", titre: "Magnifique appartement Rivoli", image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg" },
    ];
// function qui contient les id, titres et images

    return (
        <div id='cartblock'>
        {cartesDatas.map(({ id, titre, image }) => (
          <Link key={id} to={`/logement/${id}`}>
            <Card id={id} titre={titre} image={image} />
          </Link>
        ))}
      </div>
    )
}
//Générer dynamiquement les cartes en fonction des props de chaque objet

function Card({id,titre,image}) {
    return(
    <nav id='cardsBlock'>
        <div id='cartContener'>
            <img className="cardImages" src={image} alt={titre}/>
            <h2 className='cardTitle'>{titre}</h2>
        </div>
    </nav>
    );
}
//Represente la carte qui apparait sur le site

export default CardComponent;