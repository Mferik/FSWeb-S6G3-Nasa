import React from "react";

export default function Nasa(props){
    const {data} = props;
    return (
        <>
        <h1>{data.title}</h1>
        
        <img src={data.url} alt="#" />
        <div className="content-container">
        <p>{data.explanation}</p>
        </div>
        <p>{data.copyright}</p>
        </>
    )
}

