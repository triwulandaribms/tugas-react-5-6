import React from "react";

export default function Galaxy(props){
    
    return (
    <div className="card" style={{textDecoration:"none"}}>
        <h3>
            ({props.id}) {props.name}
        </h3>
        <div>
            Diameter : {props.diameter.toLocaleString("id-ID")}
        </div>
    </div>
    );
}