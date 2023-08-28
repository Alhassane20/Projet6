import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import './style/Slideshow.sass';
import { useParams } from 'react-router-dom';
import { openDescription } from './components';
import { closeDescription } from './components';
import { openEquipments } from './components';
import { closeEquipments } from './components';


function SlideComponent() {
    const idUrl = useParams().id;

    const logementDatas = [
        {
            id: "c67ab8a7",
            title: "Appartement cosy",
            pictures: ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",],
            description: "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
            name: "Nathalie Jean",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
            rating: "5",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 17e",
            équipments: [
                "Équipements de base",
                "Micro-Ondes",
                "Douche italienne",
                "Frigo",
                "WIFI"
            ],
            tags: [
                "Batignolle",
                "Montmartre"
            ],

        },
        {
            id: "b9123946",
            title: "Magnifique appartement proche Canal Saint Martin",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
            ],
            description: "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
            name: "Della Case",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
            rating: "4",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 10e",
            équipments: [
                "Parking",
                "Sèche Cheveux",
                "Machine à laver",
                "Wi-fi",
                "Cuisine équipée",
                "Télévision"
            ],
            tags: [
                "Canal Saint Martin",
                "République",
                "Appartement"
            ],

        },
        {
            id: "46d188c5",
            title: "Studio de charme - Buttes Chaumont",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg"
            ],
            description: "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
            name: "Franck Maher",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
            rating: "3",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 20e",
            équipments: [
                "Wi-fi",
                "Cuisine équipée",
                "Télévision",
                "Sèche Cheveux"
            ],
            tags: [
                "Buttes Chaumont",
                "Laumière",
                "Studio"
            ],

        },
        {
            id: "7af00cd6",
            title: "Nid douillet au coeur du 11ème",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg"
            ],
            description: "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
            name: "Della Case",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
            rating: "3",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 11e",
            équipments: [
                "Micro-Ondes",
                "Wi-fi",
                "Chambre Séparée",
                "Climatisation",
                "Télévision"
            ],
            tags: [
                "Parmentier",
                "Marais",
                "Parc",
                "Night Life"
            ],

        },
        {
            id: "0979876d",
            title: "Appartement de Standing - 10e",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-5.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-6.jpg"
            ],
            description: "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
            name: "Franck Maher",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
            rating: "5",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 10e",
            équipments: [
                "Frigo Américain",
                "Sèche Cheveux",
                "Wi-fi",
                "Chambre Séparée",
                "Parking"
            ],
            tags: [
                "Goncourt",
                "Proche commerces"
            ],

        },
        {
            id: "f72a452f",
            title: "Studio d'artiste",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-5.jpg"
            ],
            description: "Venez vous imprégner de la culture parisienne dans cet ancien studio d'artiste décoré avec goût, au coeur de Montmartre.",
            name: "Line Rolland",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg",
            rating: "5",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 18e",
            équipments: [
                "Chambre Séparée",
                "Parking"
            ],
            tags: [
                "Montmartre",
                "Culture",
                "Charme"
            ],

        },
        {
            id: "b4c67936",
            title: "Cheap - Studio 18ème",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg"
            ],
            description: "Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris.",
            name: "Hugo Perrier",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg",
            rating: "3",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 18e",
            équipments: [
                "Salle de bains",
                "Frigo",
                "Wi-fi",
                "Sèche Cheveux",
                "Bureau",
                "Parking"
            ],
            tags: [
                "Transports",
                "Cheap",
                "18ème"
            ],

        },
        {
            id: "bc6f7112",
            title: "Superbe appartement proche Tour Eiffel",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-5.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-6.jpg"
            ],
            description: "Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous êtes à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas. À vous de venir découvrir Paris !",
            name: "Sébastien Fournier",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg",
            rating: "5",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 6e",
            équipments: [
                "Wi-fi",
                "Sèche Cheveux",
                "Machine à laver",
                "Parking",
                "Lit King Size",
                "Ascenseur"
            ],
            tags: [
                "Luxe",
                "Tour Eiffel",
                "T3",
                "6ème"
            ],

        },
        {
            id: "cb2f9222",
            title: "Suite familiale",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-5.jpg"
            ],
            description: "Paris vous tend les bras ! En famille ou entre amis, venez découvrir la ville de l'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.",
            name: "Adrien Chiran",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
            rating: "4",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 14e",
            équipments: [
                "Climatisation",
                "Machine à laver",
                "Sèche Cheveux",
                "Wi-fi",
                "Parking"
            ],
            tags: [
                "Montparnasse",
                "Commerces",
                "Famille"
            ],

        },
        {
            id: "d60ca600",
            title: "Appartement moderne sur parc",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-4.jpg"
            ],
            description: "Respirer en plein coeur de Paris ? C'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !",
            name: "Adrien Chiran",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
            rating: "3",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 11e",
            équipments: [
                "Vue Parc",
                "Chauffage",
                "Sèche linge",
                "Sèche Cheveux",
                "Wi-fi",
                "Ascenseur"
            ],
            tags: [
                "Père Lachaise",
                "11e",
                "Metro 3",
                "Metro 2"
            ],

        },
        {
            id: "2cf259e1",
            title: "Charmant Studio Marais",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg"
            ],
            description: "Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.",
            name: "Victor Moran",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg",
            rating: "4",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 11e",
            équipments: [
                "Clic-clac",
                "Four",
                "Sèche Cheveux",
                "Wi-fi"
            ],
            tags: [
                "Marais",
                "Studio",
                "Parc"
            ],

        },
        {
            id: "5323c29b",
            title: "Studio fonctionnel République",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-5.jpg"
            ],
            description: "Idéalement situé à 2 pas de la place de la République, ce studio particulièrement fonctionnel est parfait pour découvrir Paris. Proche de tous les points d'intérêts grâce aux 5 lignes de métro qui sont à 5 minutes, vous pourrez rentabiliser votre temps passé à la capitale.",
            name: "Sarah Devit",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg",
            rating: "3",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 3e",
            équipments: [
                "Rangements",
                "Lit",
                "Sèche Cheveux",
                "Wi-fi",
                "TV",
                "Bouilloire"
            ],
            tags: [
                "Marais",
                "République",
                "Studio",
                "Proche Métros",
                "Commerces"
            ],

        },
        {
            id: "af6d2d48",
            title: "Bungalow dans la forêt",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-5.jpg"
            ],
            description: "Quittez Paris pour vous mettre au vert. À seulement 30 minutes de la Gare du Nord, venez découvrir la forêt d'Ecouen directement depuis la fenêtre de votre bungalow. Entièrement équipé, ce logement saura vous accueillir dans le confort, tout en vous permettant de vous concentrer sur l'essentiel. Le matin, ouvrez les fenêtres, et profitez du chant des oiseaux.",
            name: "Sarah Devit",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg",
            rating: "5",
            ville: "Ecouen - Ile de France",
            arrondissement: "",
            équipments: [
                "SDB",
                "Cuisine équipée",
                "Toilettes sèches",
                "Frigo",
                "Bouilloire"
            ],
            tags: [
                "Forêt",
                "Nature",
                "Musée d'Ecouen"
            ],

        },
        {
            id: "7cbb378e",
            title: "Grande Maison proche banlieue",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-5.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-6.jpg"
            ],
            description: "Vous chercher un endroit pour fêter un anniversaire entre amis tout en restant proche de Paris ? Ne cherchez plus ! Entièrement équipée, cette maison est l'endroit idéal pour se regrouper.",
            name: "Karen Guillet",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg",
            rating: "4",
            ville: "Arnouville - Ile de France",
            arrondissement: "",
            équipments: [
                "SDB",
                "Cuisine équipée",
                "Frigo",
                "Bouilloire",
                "WIFI",
                "Télévision",
                "Cintres",
                "Équipements de base"
            ],
            tags: [
                "Forêt",
                "Nature",
                "Grande maison"
            ],

        },
        {
            id: "ba55a0cc",
            title: "Maison T5 - Le Vésinet",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-5.jpg"
            ],
            description: "Maison T5. Idéale pour grands groupes. 45 minutes de Paris Saint-Lazare.",
            name: "Karen Guillet",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg",
            rating: "3",
            ville: "Arnouville - Ile de France",
            arrondissement: "",
            équipments: [
                "Bouilloire",
                "SDB",
                "Cuisine équipée",
                "Frigo",
                "WIFI",
                "TV",
                "Cintres",
                "Four",
                "Micro-Ondes",
                "Parking"
            ],
            tags: [
                "Nature",
                "Groupe",
                "Maison"
            ],

        },
        {
            id: "1e181317",
            title: "Loft de Luxe à la Défense",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-5.jpg"
            ],
            description: "Si vous êtes à la recherche de l'endroit idéal pour poser vos valises entre deux rdvs d'affaire, ne cherchez plus. Notre loft est l'endroit idéal. En plein coeur de la Défense, il dispose également de tous les équipements pour que vous soyez comme chez vous.",
            name: "Julie Donatella",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg",
            rating: "3",
            ville: "La Défense - Ile de France",
            arrondissement: "",
            équipments: [
                "Baie vitrée",
                "Télévision",
                "Four",
                "Frigo",
                "Wi-fi",
                "Micro-Ondes",
                "Parking"
            ],
            tags: [
                "La Défense",
                "Loft",
                "Luxe"
            ],

        },
        {
            id: "1e180563",
            title: "Charmant apt aux portes de Paris",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg"
            ],
            description: "Ce charmant appartement offre des prestations de luxe, aux portes de Paris. À deux pas de la ligne 3, vous pourrez accéder à toutes les attractions touristiques dont vous avez toujours rêvées.",
            name: "Julie Donatella",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg",
            rating: "4",
            ville: "Levallois - Ile de France",
            arrondissement: "",
            équipments: [
                "Télévision",
                "Four",
                "Frigo",
                "Hotte",
                "Wi-fi",
                "Micro-Ondes"
            ],
            tags: [
                "Vue Parc",
                "Apt de Charme"
            ],

        },
        {
            id: "2139a317",
            title: "Cheap - Chambre Paris 20",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg"
            ],
            description: "Cette chambre dispose de toutes les facilités nécessaires. Proche métro et commerces.",
            name: "Hugo Perrier",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg",
            rating: "2",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 20e",
            équipments: [
                "Bouilloire",
                "Wi-fi",
                "Micro-Ondes"
            ],
            tags: [
                "Vue Parc",
                "Métros"
            ],

        },
        {
            id: "6ff132c6",
            title: "Charmant studio",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg"
            ],
            description: "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
            name: "Michel Romy",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg",
            rating: "4",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 13e",
            équipments: [
                "Équipements de base",
                "Four",
                "Frigo",
                "Wi-fi",
                "Micro-Ondes"
            ],
            tags: [
                "Studio",
                "Charmant",
                "13e"
            ],

        },
        {
            id: "cb02d69b",
            title: "Magnifique appartement Rivoli",
            pictures: [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg"
            ],
            description: "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
            name: "Nathalie Jean",
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
            rating: "4",
            ville: "Paris - Ile de France",
            arrondissement: "Paris 13e",
            équipments: [
                "Wi-fi",
                "Équipements de base",
                "Micro-Ondes",
                "Frigo",
                "Baignoire"
            ],
            tags: [
                "Louvre",
                "Marais",
                "Rivoli"
            ],

        },

    ];

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
            picture={logementToDisplay.picture} 
            rating={logementToDisplay.rating} 
            ville={logementToDisplay.ville} 
            arrondissement={logementToDisplay.arrondissement} 
            équipements={logementToDisplay.équipments} 
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
    
        return (
            <div id='slideBlock'>
                <div id="block-1">
                    <div id='pictures'>
                    {pictures.map((imageUrl, index) => (
                    <div key={index} className={`image-container ${index === imageIndex ? '' : 'autre-image'}`}>
                    <img src={imageUrl} alt={`Image ${index + 1}`} />
                    <i className="fa-solid fa-chevron-left flecheGauche" onClick={clicImagePrecedente}></i>
                    <i className="fa-solid fa-chevron-right flecheDroite" onClick={clicImageSuivante}></i>
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
                            <i className="fa-solid fa-angle-up upDescription" id='upDescription' onClick={openDescription}></i>
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
       { (1 <= props.rating) ? <i class="fa-solid fa-star color-red"></i> : <i class="fa-solid fa-star color-grey"></i> }
       { (2 <= props.rating) ? <i class="fa-solid fa-star color-red "></i> : <i class="fa-solid fa-star color-grey"></i> }
       { (3 <= props.rating) ? <i class="fa-solid fa-star color-red"></i> : <i class="fa-solid fa-star color-grey"></i> }
       { (4 <= props.rating) ? <i class="fa-solid fa-star color-red"></i> : <i class="fa-solid fa-star color-grey"></i> }
       { (5 <= props.rating) ? <i class="fa-solid fa-star color-red"></i> : <i class="fa-solid fa-star color-grey"></i> }
    </div>)

}
// La couleur rouge est proportionnelle au nombre de rating, la couleur grise est utilisé pour les etoiles restantes
export default SlideComponent;