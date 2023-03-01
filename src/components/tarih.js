import React from "react";

export default function Tarih (props){
    const {değiştirici} = props;

    return (
        <input type ="date" onChange={(event) => değiştirici(event.target.value)}/>
    )
    }