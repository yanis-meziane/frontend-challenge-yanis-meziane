import "../CSS/Hook.css"
import Alert from '@mui/material/Alert'
import { useState } from "react";

const Hook = () => {

  const [showAlert, setShowAlert] = useState(false);

  const alertClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
  <>
    <header className="Hook">
      <nav>
        <div className="logo">
          <h1>Ma campagne</h1>
        </div>

        <section className="nav-links">
          <article>
            <button className="firstButton">
                Code PIN
            </button>
          </article>

          <article>
            <button className="secondButton">
              QR Code
            </button>
          </article>

          <article>
            <button className="saveButton" onClick={() => alertClick()}>
              Sauvergarder
            </button>
          </article>
        </section>
      </nav>
    </header>

     {showAlert && (<Alert severity="success" id="iconAlert">Sauvegarde réussi avec succès</Alert>)}
  </>
  );
};

export default Hook;