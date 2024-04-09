import { Link } from "react-router-dom";

function Perry() {

    const Perry = {
        name: "Perry",
        age: 4,
        src: "/perry.jpg",
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    };

    return (
        <div>
            <h1>{Perry.name}</h1>
            <img src={Perry.src} alt={Perry.name} />
            <h2>{Perry.age} years old</h2>
            <ul>
                {Perry.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Return to Dog List</Link>

        </div>
    );
}

export default Perry;