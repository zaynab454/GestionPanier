import React from "react";
import { useState, useRef } from "react";


export default function CartPage(){
    const [produits, setProduits] = useState([]); 
    const totalProduitsRef = useRef(0); 
    const messageRef = useRef(null); 
    const boutonAjouterRef = useRef([]); 
    const produitsDisponibles =
    [
    { id: 1, nom: "Produit A", prix: 10 },
    { id: 2, nom: "Produit B", prix: 15 },
    {id: 3, nom: "Produit C", prix: 20 },
    ];

    const ajouterAuPanier = (produit, index)=>{
        setProduits((prev)=>[...prev,produit]);
        totalProduitsRef.current += 1;
        boutonAjouterRef.current[index].style.backgroundColor = "green";
        boutonAjouterRef.current[index].textContent = "Ajouté";

        messageRef.current.textContent = `Produit "${produit.nom}" ajouté!`;

        setTimeout(
            ()=>{messageRef.current.textContent = "";},2000)
       
    };

    return(
        <div className="produit-panier container py-4">
  <h1 className="text-center mb-4">Liste des produits</h1>
  <ul className="list-group">
    {produitsDisponibles.map((produit, index) => (
      <li
        key={produit.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {produit.nom} - {produit.prix} £
        <button
          ref={(el) => (boutonAjouterRef.current[index] = el)}
          className="btn btn-outline-secondary"
          onClick={() => ajouterAuPanier(produit, index)}
        >
          Ajouter au Panier
        </button>
      </li>
    ))}
  </ul>

  <h2 className="text-center mt-4">Panier</h2>
  <ul className="list-group mb-4">
    {produits.length === 0 ? (
      <li className="list-group-item text-center">Votre panier est vide.</li>
    ) : (
      produits.map((produit, index) => (
        <li key={index} className="list-group-item">
          {produit.nom} - {produit.prix} £
        </li>
      ))
    )}
  </ul>

  <p className="text-center">
    Total des produits dans le panier : <strong>{totalProduitsRef.current}</strong>
  </p>

  <p ref={messageRef} className="text-center text-dark font-weight-bold"></p>
</div>

    );

}



