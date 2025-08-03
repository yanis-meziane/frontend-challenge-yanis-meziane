import "../CSS/Hook.css"

const Hook = () => {
  return (
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
            <button className="saveButton" onClick={() => alert("Sauvegarde pris en compte")}>
              Sauvergarder
            </button>
          </article>
        </section>
      </nav>
    </header>
  );
};

export default Hook;