import "../src/CSS/GameChoice.css"
import { useState } from "react";

const GameChoice = () => {
  const Images = [
    {id: 1, src: "../src/assets/wheel.jpg", name: "wheel"},
    {id: 2, src: "../src/assets/mystery.png", name: "mystery"},  
    {id: 3, src: "../src/assets/slot.png", name: "slot"},
    {id: 4, src: "../src/assets/card.png", name: "card"},
  ];

  // Image sélectionnée par défaut (la première)
  const [selectedImage, setSelectedImage] = useState(Images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    console.log("Jeu sélectionné:", image.name);
  };

  return (
    <>
      <div className="HeaderChoice">
        <h3>Choix du jeu</h3>
        <p>Sélectionner parmi 4 jeux interactifs pour engager vos utilisateurs et créer une expérience unique</p>
      </div>
      
      <div id="jeux">
        <section className="nav-links">
          {Images.map((image) => (
            <article key={image.id}>
              <button 
                className={`game ${selectedImage.id === image.id ? 'selected' : ''}`}
                onClick={() => handleImageClick(image)}
               >
                <img src={image.src} alt={image.name} />
              </button>
            </article>
          ))}
        </section>
      </div>
  
    </>
  )
}

export default GameChoice;