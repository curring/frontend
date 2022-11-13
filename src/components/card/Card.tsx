import "./Card.css";
import { Link } from "react-router-dom";
import { ICard } from "../../types"



function Card( {id, title, description, img}: ICard ) {
    
    
    return (
        <div className="card">
            <img className="img-card" src={ img } alt="img demo" />
            <div className="card-body">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <Link className="button-link" to={`/project/${id}`}>
                    ver proyecto
                </Link>
            </div>
        </div>
    );
}
export default Card;