# **ShelterSync**

**ShelterSync** is a dynamic, interactive web application built with **React** that transforms a static animal shelter directory into a functional adoption management platform. The application allows users to browse available pets by breed, view detailed animal profiles, and simulate the adoption process through real-time state updates.

---

## **Key Features**

* **Dynamic Breed Navigation:** Automatically generates a unique sidebar navigation menu based on the breeds currently available in the shelter's database.
* **Interactive Adoption Flow:** Users can "adopt" pets by clicking on their profiles. The application utilizes React's **State Hook (`useState`)** to immediately reflect adoption status in the UI without a page reload.
* **Component-Based Architecture:** Features a modular design with reusable `PetCard`, `PetList`, and `Navigation` components, ensuring the code is scalable and maintainable.
* **Smart Data Management:** Uses **Lodash** for efficient data manipulation (grouping and unique key extraction) and maps complex JSON data structures into interactive UI elements.
* **Responsive UI:** Integrated with **Bootstrap** and custom CSS to provide a clean, modern "card-based" interface that works across various screen sizes.

---

## **Technical Stack**

* **Framework:** [React.js](https://reactjs.org/)
* **State Management:** React Hooks (`useState`)
* **Utilities:** [Lodash](https://lodash.com/) (Data transformation)
* **Styling:** Bootstrap 5 & Custom CSS
* **Tooling:** Create React App (CRA)

---

## **How It Works**

1.  **Stateful Data:** The application receives a raw array of pet objects. Upon initialization, this data is lifted into the `App` component's state.
2.  **Callback Props:** A centralized `adoptPet` function is defined in the root component and passed down through the component tree (App → PetList → PetCard).
3.  **Event Handling:** When a user clicks a `PetCard`, an `onClick` event triggers the callback, updating the specific pet's `adopted` property to `true`.
4.  **Conditional Rendering:** React detects the state change and re-renders the specific card, appending the **(Adopted)** tag to the pet's name via ternary logic.

---

## **Installation & Setup**

To run **ShelterSync** on your local machine, ensure you have [Node.js](https://nodejs.org/) installed:

1.  **Clone the repository** and navigate to the project directory:
    ```bash
    cd sheltersync-interactive
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Launch the development server**:
    ```bash
    npm start
    ```

4.  **View the App**: 
    The application will automatically open in your default browser at `http://localhost:3000`.

---

## **Project Structure**

* **`App.js`**: The "Brain" of the app; manages global state and the main page structure.
* **`Navigation.js`**: Contains `AboutNav` and the dynamically generated `BreedNav`.
* **`PetList.js`**: Handles the rendering of the pet grid and individual `PetCard` components.
* **`style.css`**: Custom theme styling for the shelter's brand identity.

---

**Developed by:** Amartya Chaube  
**Mission:** Modernizing animal shelter management through interactive web solutions.
