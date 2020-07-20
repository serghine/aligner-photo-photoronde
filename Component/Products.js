import React,{Component} from "react";
import Pruduct from "./Pruduct"

class Products extends Component{
    state={
        prestations:[
            {photo:"image1.png",libelle:"nettbie justo",prix:200},
            {photo:"images80JV21D8.jpg",libelle:" justo",prix:500},
            {photo:"man-1455433_1280.jpg",libelle:"perle en diamont",prix:800},
            {photo:"image1.png",libelle:"rombo",prix:20},
            {photo:"image1.png",libelle:"rombo",prix:20},
            {photo:"image1.png",libelle:"rombo",prix:20},
            {photo:"image1.png",libelle:"rombo",prix:20},
            {photo:"image1.png",libelle:"rombo",prix:20},
            {photo:"image1.png",libelle:"rombo",prix:20}
        ]
    }

    render(){
     
       
        return(
            <div style={{display:"grid",
                gridTemplateColumns:"1fr 1fr 1fr",
                gridGap:"10px 2em",
                  alignSelf:"center"}}>
                    
             {
            this.state.prestations.map((prestation,index)=>{
                 return(
                     <Pruduct key={index} photo={prestation.photo} 
                              libelle={prestation.libelle}
                              prix={prestation.prix}/>
                 )
            })
        }
            </div>
        )
        
        
    }
}
export default Products;