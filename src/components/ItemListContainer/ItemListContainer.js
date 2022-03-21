import React from "react";
import Cards from "../Cards/Cards";
import './ItemListContainer.css'
export default function ItemListContainer(props) {
    const {titulo,total} = props
    //console.log(`en ItemList ${total}`)
    return (
        <div className="list-styte">
            <h2> {titulo}</h2>
            <Cards titulo="Lapiz negro"    marca="faber"         precio={50}   stock={20} initial={1} total={total} />
            <Cards titulo="Goma de borrar" marca="faber"         precio={20}   stock={5}  initial={1} total={total}/>
            <Cards titulo="Regla"          marca="mapped"        precio={25}   stock={12} initial={1} total={total}/>
            <Cards titulo="Caja Lapices"   marca="faber castell" precio={300}  stock={8}  initial={1} total={total}/>
            <Cards titulo="Portautil"      marca="como quieres"  precio={1500} stock={3}  initial={1} total={total}/>
            <Cards titulo="Carpeta A4"     marca="rivadavia"     precio={700}  stock={10} initial={1} total={total}/>
            <Cards titulo="Carpeta A5"     marca="rivadavia"     precio={800}  stock={25} initial={1} total={total}/>

        </div>

    );

}