import React from 'react';

export function AboutNav() {
    return (
        <nav>
            <h2>About</h2>
            <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#staff">Our Staff</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#support">Support Us</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    );
}

export function BreedNav({ breeds }) {
    return (
        <nav>
            <h2>Pick a Breed</h2>
            <ul id="breedLinks">
                {breeds.map(breed => (
                    <li key={breed}><a href="">{breed}</a></li>
                ))}
            </ul>
        </nav>
    );
}
