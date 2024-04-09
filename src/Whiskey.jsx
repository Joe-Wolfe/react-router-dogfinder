import { Link } from "react-router-dom";

function Whiskey() {

    const Whiskey = {
        name: "Whiskey",
        age: 5,
        src: "/whiskey.jpg",
        facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    }

    return (
        <div>
            <h1>{Whiskey.name}</h1>
            <img src={Whiskey.src} alt={Whiskey.name} />
            <h2>{Whiskey.age} years old</h2>
            <ul>
                {Whiskey.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>

            <Link to="/dogs">Return to Dog List</Link>
        </div>
    );
}

export default Whiskey;