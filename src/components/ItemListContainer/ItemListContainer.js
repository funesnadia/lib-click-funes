import React from "react";
import Cards from "../Cards/Cards";
import './ItemListContainer.css'
export default function ItemListContainer(props) {
    return (
        <div className="list-styte">
            <h2> {props.titulo}</h2>
            <Cards titulo="Lapiz negro" marca="faber" precio={50} />
            <Cards titulo="Goma de borrar" marca="faber" precio={20} />
            <Cards titulo="Regla" marca="mapped" precio={25} />
            <Cards titulo="Caja Lapices" marca="faber castell" precio={300} />
            <Cards titulo="Portautil" marca="como quieres" precio={1500} />
            <Cards titulo="Carpeta A4" marca="rivadavia" precio={700} />
            <Cards titulo="Carpeta A5" marca="rivadavia" precio={800} />

        </div>

    );

}