import "../CSS/personalize.css"
import React, {useState} from "react"

const Personalize = () => {

    const [dragActive, setDragActive] = useState(false);
    const [color, setColor] = useState("#3498db");
    const [inputValue, setInputValue] = useState("#3498db");

    const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (isValid(value)) {
      setColor(value);
    }
  };

    const isValid = (value: string) =>
    /^#([0-9A-Fa-f]{6})$/.test(value);

   

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            console.log("Fichier déposé:", files[0].name);
        }
    };

    return(
       <>
            <div id="personnalizePart">
                <h3>Personnaliser votre jeu</h3>
                <p>importer votre logo et sélectionner vos couleurs pour créer un jeu à l'image de votre marque.</p>
                <p>Offrez à vos clients une expérience unique, entièrement personnalisée.</p>
            </div>

            <section id="personnalizeElement">
                <article className={`drop-zone ${dragActive ? 'active' : ''}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop} id="element1">

                    <h3>Glisser votre logo</h3>
                    <input type="file"  />
                </article>

                <article id="element2">
                    <h3>Importez vos couleurs</h3>

                    <p style= {{color}}>Aperçu du texte en couleur</p>

                    <label>Code Hexadécimale :</label>
                    <input type="text" value={inputValue}  onChange={handleHexInputChange}  maxLength={7} style={{border: isValid(inputValue) ? "1px solid #ccc" : "1px solid red",}} />
                </article>
            </section>
       </> 
    )
}


export default Personalize