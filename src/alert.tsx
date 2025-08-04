import "./CSS/alert.css";
import LockIcon from '@mui/icons-material/Lock';



const Alert = () => {
    return(
        <>
        <section id="alert">
            <article id="firstPart">
                <div id="Icon"> 
                    <LockIcon style={{color:"gold"}}></LockIcon>
                </div>

                <div className="alertContent">
                    <h2>Votre Code PIN n'est pas configuré</h2>
                    <p>Activez-le pour sécuriser la récupération des cadeaux par vos clients</p>
                </div>
            </article>
            <article id="secondPart">
                <input type="button" value="Configurer mon code" id="configurationButton" onClick={() => alert("Redirection pour définir le Mot de passe")}/>
            </article>
        </section>
        </>
    )
}

export default Alert