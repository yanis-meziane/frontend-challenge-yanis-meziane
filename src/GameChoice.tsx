import "../src/CSS/GameChoice.css" 


const GameChoice = () => {
 return(
    <>
        <div id="type">
            <h3>Bonjour</h3>
            <p>Sélectionner parmi 4 jeux interactifs pour engager vos utilisateurs et créer une expérience unique</p>
        </div>
        
    <div id="jeux">
        <section className="nav-links">
          <article>
            <button id="firstgame">
                Code PIN
            </button>
          </article>

          <article>
            <button id="secondGame">
              QR Code
            </button>
          </article>

          <article>
            <button id="thirdGame">
              Sauvergarder
            </button>
          </article>

          <article>
                <button id="fourtGame">
                    hello
                </button>
          </article>
        </section>
    </div>
</>

 )   
}


export default GameChoice;
