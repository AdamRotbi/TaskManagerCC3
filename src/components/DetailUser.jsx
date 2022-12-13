import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DetailUser() {
  const listUsers = useSelector((state) => state.user.data);
  const id = useParams();
  const UserChoisi = listUsers.filter((item) => item.id == id);
  return (
    <div>
      {UserChoisi.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.image} />
          </div>
          <div>
            prenom : <h5>{`${item.lastName}`}</h5>
          </div>
          <div>
            Nom :<h5>{`${item.firstName}}`}</h5>
          </div>
          <div>
            Age: <h5>{item.age}</h5>
          </div>
          <div>
            Gender: <h5>{item.gender}</h5>
          </div>
          <div>
            Email: <h5>{item.email}</h5>
          </div>
          <div>
            Phone: <h5>{item.phone}</h5>
          </div>
          <div>
            poids: <h5>{item.weight}</h5>
          </div>
          <div>
            hauteur: <h5>{item.height}</h5>
          </div>
          <div>
            date naissance: <h5>{item.birthDate}</h5>
          </div>
          <div>
            groupe sanguin : <h5>{item.bloodGroup}</h5>
          </div>
          <div>
            couleur d'oeil : <h5>{item.eyeColor}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
