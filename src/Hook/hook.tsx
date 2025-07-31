import "../CSS/Hook.css"
import Button from "@mui/material/Button"

const Hook = () => {
  return (
    <header className="Hook">
      <nav>
        <div className="logo">
          <h1>Ma campagne</h1>
        </div>

        <section className="nav-links">

          <article>
            <Button color="blue">
                 <a href="#home">Accueil</a>
            </Button>
          </article>

        <article>
            <Button>
                <a href="#about">À propos</a>
            </Button>
        </article>

          <article>
            <Button>
                <a href="#contact">Contact</a>
            </Button>
          </article>

        </section>
      </nav>
    </header>
  );
};

export default Hook;