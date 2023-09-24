
import './style/Collapse.sass';
import { toggleCollapse } from './components.js';

function Collapse() {
    return (
      <nav id="collapses">
        <div className='collapseBlock'>
          <div className="collapse">
            <p>Fiabilité</p>
            <p>
              <i className="fa-solid fa-angle-up rotate" id='toggleCollapse0' onClick={() => toggleCollapse(0)}></i>
            </p>
          </div>
          <div className='collapseParagraphe'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
        </div>
        <div className='collapseBlock'>
          <div className="collapse">
            <p>Respect</p>
            <p>
              <i className="fa-solid fa-angle-up rotate" id='toggleCollapse1' onClick={() => toggleCollapse(1)}></i>
            </p>                    
          </div>
          <div className='collapseParagraphe'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</div>
        </div>
        <div className='collapseBlock'>
          <div className="collapse">
            <p>Service</p>
            <p>
              <i className="fa-solid fa-angle-up rotate" id='toggleCollapse2' onClick={() => toggleCollapse(2)}></i>
            </p>
          </div>
          <div className='collapseParagraphe'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</div>
        </div>
        <div className='collapseBlock'>
          <div className="collapse">
            <p>Sécurité</p>
            <p>
              <i className="fa-solid fa-angle-up rotate" id='toggleCollapse3' onClick={() => toggleCollapse(3)}></i>
            </p>
          </div>
          <div className='collapseParagraphe'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspondaux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers que la sécurité domestique pour nos hôtes.</div>
        </div>
      </nav> 
    )
  }
  


export default Collapse