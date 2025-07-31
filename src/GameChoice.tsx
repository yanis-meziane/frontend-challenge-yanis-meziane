import "../src/CSS/GameChoice.css" 


const GameChoice = () => {
 return(
    <>
        <div id="type">
            <h3>Choix du jeu</h3>
            <p>Sélectionner parmi 4 jeux interactifs pour engager vos utilisateurs et créer une expérience unique</p>
        </div>

    <div id="jeux">
        <section className="nav-links">
          <article>
            <button id="firstgame">
                <img src="../src/assets/wheel.jpg" alt="" />
            </button>
          </article>

          <article>
            <button id="secondGame">
                <img src="../src/assets/mystery.png" alt="" />
            </button>
          </article>

          <article>
            <button id="thirdGame">
              <img src="../src/assets/slot.png" alt="" />
            </button>
          </article>

          <article>
                <button id="fourtGame">
                   <img src="../src/assets/card.png" alt="" />
                </button>
          </article>
        </section>
    </div>
</>

 )   
}


export default GameChoice;
