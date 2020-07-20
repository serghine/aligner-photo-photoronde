import React from 'react'

const Pruduct=(props)=> {
    return (
        <div style={{backgroundColor:"green"}}>
            <img src={props.photo} alt="" style={{
                 width : "250px", 
                 height :"250px",
                 border: "none",
                 mozBorderRadius : "85px",
                 webkitBorderradius :"85px",
                 borderRadius:"85px"
	}}/>
            <p>Libelle:{props.libelle}</p>
            <p>Prix:{props.prix}</p>

        </div>
    )
}

export default Pruduct;
