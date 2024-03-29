import { moneyFormat } from "../helpers";

const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {
    const HandleDelete = (e) =>{
        e.preventDefault();
        eliminarItem(id);
    }

    const HandleEdit = e => {
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/Imagenes/${type}.png`;
    return ( 
        <div className="single-item">
            <img src={ urlImage } alt="Servicios"/>
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={HandleDelete} >Borrar</a>
            <a href="" className="edit" onClick={HandleEdit} >Editar</a>
        </div>    
    );
}

export default SingleItem;