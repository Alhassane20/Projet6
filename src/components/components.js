export function toggleCollapse(index) {
  let paragraphe = document.getElementsByClassName('collapseParagraphe');
  let toggleCollapse = document.getElementById(`toggleCollapse${index}`);

  if (paragraphe[index].style.maxHeight === "0px" || paragraphe[index].style.maxHeight === "") {
    paragraphe[index].style.maxHeight = "500px"; // Ouvre le paragraphe
    toggleCollapse.style.transform = "rotate(-180deg)";
    paragraphe[index].style.padding = "15px"; // Ajoute le padding
  } else {
    paragraphe[index].style.maxHeight = "0px"; // Ferme le paragraphe
    toggleCollapse.style.transform = "rotate(0deg)"; // Inverse la rotation vers le haut
    paragraphe[index].style.padding = "0px"; // Retire le padding
  }
}


export function toggleDescription() {
  let description = document.getElementById('ParagrapheDescription');
  let toggleDescription = document.getElementById('toggleDescription');

  if (description.style.maxHeight === "0px" || description.style.maxHeight === "") {
    description.style.maxHeight = "500px"; // Ouvre le paragraphe
    toggleDescription.style.transform = "rotate(-180deg)"; // Rotation vers le bas
    description.style.padding = "15px"; // Ajout de padding
  } else {
    description.style.maxHeight = "0px"; // Ferme le paragraphe
    toggleDescription.style.transform = "rotate(0deg)"; // Rotation vers le haut
    description.style.padding = "0"; // Ajout de padding
  }
}

export function toggleEquipments() {
  let equipments = document.getElementById('ParagrapheEquipments');
  let toggleEquipments = document.getElementById('toggleEquipments');

  if (equipments.style.maxHeight === "0px" || equipments.style.maxHeight === "") {
    equipments.style.maxHeight = "500px"; // Ouvre le paragraphe
    toggleEquipments.style.transform = "rotate(-180deg)"; // Rotation vers le bas
    equipments.style.padding = "15px"; // Ajout de padding
  } else {
    equipments.style.maxHeight = "0px"; // Ferme le paragraphe
    toggleEquipments.style.transform = "rotate(0deg)"; // Rotation vers le haut
    equipments.style.padding = "0"; // Ajout de padding
  }
}

