import React from 'react';

function PetCard({ petData, adoptCallback }) {
    return (
        <div className="card" onClick={() => adoptCallback(petData.name)}>
            <img src={petData.img} alt={petData.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{petData.name} {petData.adopted && "(Adopted)"}</h5>
                <p className="card-text">{petData.sex} {petData.breed}</p>
            </div>
        </div>
    );
}

export default function PetList({ pets, adoptCallback }) {
    return (
        <div>
            <h2>Dogs for Adoption</h2>
            <div className="card-columns">
                {pets.map(pet => (
                    <PetCard key={pet.name} petData={pet} adoptCallback={adoptCallback} />
                ))}
            </div>
        </div>
    );
}
