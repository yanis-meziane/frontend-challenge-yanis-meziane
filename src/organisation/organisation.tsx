import "../CSS/organisation.css"
import Alert from "@mui/material/Alert"
import { useState } from "react"

const Organisation = () => {

    const [showAlert, setShowAlert] = useState(false);
    const alertClick = () => {
        setShowAlert(true);
        setTimeout(() => {setShowAlert(false)},4000)
    }

    return (
        <>
            <div className="HeaderOrganisation">
                <h3>Organisez vos actions</h3>
                <p>Définissez l'ordre et les actions à réaliser par vos clients pour maximiser l'engagement</p>
            </div>

            <article id="secondPart">
                <input type="button" value="Ajouter une action +" id="organisationButton" onClick={() => alertClick()}/>
            </article>

            {showAlert && <Alert severity="warning" id="warning">Action pas encore possible</Alert> }

            <table border={1} cellPadding={8} id="table">
                <thead>
                    <tr>
                        <th>Ordre des actions</th>
                        <th>Action</th>
                        <th colSpan={2}>Cible</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr> {/*Première ligne */}
                        <td>
                            Première Action
                        </td>
                            <td>
                                <strong>
                                    Avis Google
                                </strong>
                            </td>
                        <td>
                            <a href="#">Lien google</a>
                                <span id="integration">
                                    Intégré
                                </span>
                        </td>
                        
                        <td>
                            <button>
                                Supprimer
                            </button>
                        </td>
                    </tr>

                    <tr> {/*Deuxième ligne */}
                        <td>
                            Deuxième action
                        </td>

                        <td colSpan={3}>
                            <a href="#">Ajouter une deuxième action +</a>
                        </td>
                        
                        
                    </tr>

                    <tr> {/*Troisième ligne*/}
                            <td>
                                Dernière action
                            </td>

                            <td>
                                <strong>
                                    Parrainage
                                    <span id="Parrainage">(Par défaut)</span>
                                </strong>
                            </td>

                            <td colSpan={2}>
                                <a href="#">Modifier</a>
                                <a href="#">En savoir plus</a>
                            </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Organisation;