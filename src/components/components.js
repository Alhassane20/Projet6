export function collapseEvent(index) {
    let paragraphe = document.getElementsByClassName('collapseParagraphe');
    let down = document.getElementsByClassName('fa-angle-down');
    let up = document.getElementsByClassName('fa-angle-up');
  
    for (let i = 0; i < down.length; i++) {
      down[i].style.display = i === index ? 'block' : 'none'; // l'incone down apparait au clic sur l'icone up de la meme ligne, les trois autres icones down n'apparaissent pas
    }
  
    for (let i = 0; i < up.length; i++) {
      up[i].style.display = i === index ? 'none' : 'block'; // l'icone up disparait quand on clique dessus, les autres icones up ne disparaissent pas
    }
  
    for (let i = 0; i < paragraphe.length; i++) {
      paragraphe[i].style.maxHeight = i === index ? '500px' : '0'; // le paragraphe apparait au clic sur l'icone up de la meme ligne, les autres paragraphes n'apparaissent pas
    }
  }
  // Parcourt les icones up, le paragraphe sur la meme ligne de l'icone selectionnée s'affiche et l'icone down apparait
  export function closeParagraphe(index) {
    let paragraphe = document.getElementsByClassName('collapseParagraphe');
    let down = document.getElementsByClassName('fa-angle-down');
    let up = document.getElementsByClassName('fa-angle-up');
  
    down[index].style.display = 'none'; //L'icone down disparait au clic
    up[index].style.display = 'block'; // L'icone up réapparait au clic sur le bouton down
    paragraphe[index].style.display = 'none'; // Le paragraphe disparait au clic sur le bouton down
    
  }
// Ferme le paragraphe selectionné et affiche l'icone up

export function openDescription() {
  let description = document.getElementById('ParagrapheDescription');
  let upDescription = document.getElementById('upDescription');
  let downDescription = document.getElementById('downDescription');

  description.style.maxHeight = "500px";
  upDescription.style.display = "none";
  downDescription.style.display = "block";
}

export function closeDescription() {
  let description = document.getElementById('ParagrapheDescription');
  let upDescription = document.getElementById('upDescription');
  let downDescription = document.getElementById('downDescription');

  description.style.maxHeight = "0";
  upDescription.style.display = "block";
  downDescription.style.display = "none";
}

export function openEquipments() {
  let equipments = document.getElementById('ParagrapheEquipments');
  let upEquipments = document.getElementById('upEquipments');
  let downEquipments = document.getElementById('downEquipments');

  equipments.style.maxHeight = "500px";
  upEquipments.style.display = "none";
  downEquipments.style.display = "block";
}

export function closeEquipments() {
  let equipments = document.getElementById('ParagrapheEquipments');
  let upEquipments = document.getElementById('upEquipments');
  let downEquipments = document.getElementById('downEquipments');

  equipments.style.maxHeight = "0";
  upEquipments.style.display = "block";
  downEquipments.style.display = "none";
}
