import React, { useState } from 'react';
import { AboutNav, BreedNav } from './Navigation';
import PetList from './PetList';

export default function App({ pets }) {
    const [petList, setPetList] = useState(pets);

    const adoptPet = (petName) => {
        const updatedPets = petList.map(pet => {
            if (pet.name === petName) {
                return { ...pet, adopted: true };
            }
            return pet;
        });
        setPetList(updatedPets);
    };

    const breeds = Array.from(new Set(petList.map(pet => pet.breed)));

    return (
        <div className="container">
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Adopt a Pet</h1>
                </div>
            </header>
            <main className="row">
                <div id="navs" className="col-3">
                    <AboutNav />
                    <BreedNav breeds={breeds} />
                </div>
                <div id="petList" className="col-9">
                    <PetList pets={petList} adoptCallback={adoptPet} />
                </div>
            </main>
            <footer>
                <p>Images from Seattle Humane Society</p>
            </footer>
        </div>
    );
}
