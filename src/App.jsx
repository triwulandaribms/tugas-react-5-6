import React from "react";
import { useState } from "react";
import Galaxy from "./Components/Galaxy";
import Header from "./Components/Header";
import {AiOutlinePlus} from "react-icons/Ai";
import {AiFillDelete} from "react-icons/Ai";
import {AiOutlineZoomIn} from "react-icons/Ai";
import {AiOutlineZoomOut} from "react-icons/Ai";
import {RxUpdate} from "react-icons/Rx";

export default function App(){
  
  // HOOK useState untuk nampil data awal
  const [galaxies,setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000
    },
    {
      id: 2,
      name : "Bima Sakti",
      diameter : 100000
    },
    {
      id: 3,
      name : "Triangulum",
      diameter: 60000
    }
  ])

  // HOOK useState untuk menambah
  const [newGalaxies,setNewGalaxies] = useState([
    {
      id: "",
      name: "",
      diameter: ""
    }
  ]);

  // HOOK useState untuk edit / hapus berdasarkan ID
   const [editGalaxies,setEditGalaxies] = useState([
    {
      id: "",
      name: "",
    }
   ]);

  return (
    <>
    <Header/>
    <main>
    <div style={{display: "flex", flexDirection: "column", gap: "8"}}>
      {
      galaxies.map((galaxy, index)=>(
        <div key={index} className="card">
          <Galaxy
            id={galaxy.id}
            name={galaxy.name}
            diameter={galaxy.diameter}
          />
        </div>
      ))}
    </div>

    {/* BAGIAN TAMBAH  */}
    <div
      className="card"
      style={{
        display: "flex",
        flexBasis: "column",
        gap: "8",
      }}
    >
      <form className="card">
        <h1>Tambah</h1>

        <label> ID  </label>
            <input 
              type="number"
              value={newGalaxies.id}
              onChange={(e) => setNewGalaxies({...newGalaxies,id:e.target.value})}/>

        <label> Nama  </label>
            <input 
              value={newGalaxies.name}
              onChange={(e) => setNewGalaxies({...newGalaxies,name:e.target.value})}

            />

        <label> Diameter  </label> 
            <input 
              type="number"  
              value={newGalaxies.diameter}
              onChange={(e) => setNewGalaxies({...newGalaxies,diameter:e.target.value})}

            />


        <button
          onClick={(e) =>{
            e.preventDefault();
            setGalaxies([ ...galaxies,{...newGalaxies}])
          }}
        >
           <AiOutlinePlus/> Depan 
        </button>

     
        <button 
          onClick={(e) =>{
            e.preventDefault();
            setGalaxies([{...newGalaxies},...galaxies]);
          }}
        >
              <AiOutlinePlus/> Belakang 
        </button>
      </form>
    </div>

{/* BAGIAN EDIT / HAPUS BERDASARKAN ID */}
    <div 
    className="card"
    style={{
      display: "flex",
      flexBasis: "column",
      gap: "8"
    }}>
      <form>
        <h4>Edit / Hapus Berdasarkan ID</h4>

        <label>ID  </label>
        <input 
          type="number"
          value={editGalaxies.id}
          onChange={(e) => setEditGalaxies({...editGalaxies,id:e.target.value})}
        />

        <label> Nama  </label> 
          <input 
              value={editGalaxies.name}
              onChange={(e) => setEditGalaxies({...editGalaxies,name:e.target.value})}
          />

         <label> Diameter  </label>
          <button
            onClick={(e) =>{
              e.preventDefault();
              const updateGalaxies = galaxies.map((galaxy) =>{
                
                if(parseInt(editGalaxies.id) === galaxy.id ){
                  return {...galaxy, name: editGalaxies.name};
                }else{
                  return galaxy;
                }
            });
                setGalaxies(updateGalaxies);
            }}
            >
                
                <RxUpdate /> update by ID
          </button>

          <button
            onClick={(e) =>{
              e.preventDefault();
              const hapusID = galaxies.filter((galaxy) =>{
                return parseInt(editGalaxies.id) !== galaxy.id
              });
              setGalaxies(hapusID);
            }}
          >
              <AiFillDelete/>  hapus by ID
          </button>

          <button
            onClick={(e) =>{
              e.preventDefault();
              const increment = galaxies.map((galaxy) =>{
                if(parseInt(editGalaxies.id) === galaxy.id){
                  return {...galaxy, diameter: parseInt(galaxy.diameter )+ 1} 
                }else{
                  return galaxy;
                }
            });
                setGalaxies(increment);
            }}
            >
              
              <AiOutlineZoomIn/> Perbesar
          </button>

          <button
            onClick={(e) =>{
              e.preventDefault();
              const decrement = galaxies.map((galaxy) =>{
                if(parseInt(editGalaxies.id) === galaxy.id){
                  return {...galaxy, diameter: parseInt(galaxy.diameter)- 1}
                }else{
                  return galaxy;
                }
              });
                setGalaxies(decrement);
            }}
            >
              
              <AiOutlineZoomOut /> Perkecil
          </button>
      </form>
  </div>

{/* BAGIAN HAPUS */}
     <div
      className="card"
      style={{
        display: "flex",
        flexBasis: "column",
        gap: "8",
      }}
    >
      <form className="card">
        <h1>Hapus</h1>


        <button onClick={(e) =>{
          e.preventDefault();
          setGalaxies(galaxies.slice(1))}}
        > 
          
          <AiFillDelete/> Depan
        </button>

      
        <button onClick= {(e) =>{
          e.preventDefault();
          setGalaxies(galaxies.slice(0,-1));
        }}>  
           
           <AiFillDelete/> Belakang 
        </button>

    
        <button onClick={(e) =>{ 
          e.preventDefault();
          setGalaxies([])}}
        >
            
            <AiFillDelete/> Hapus Semua
        </button>
      </form>
    </div>
    </main>
    </>
  );
}