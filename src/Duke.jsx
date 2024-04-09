import { Link } from "react-router-dom";

function Duke() {

    const Duke = {
        name: "Duke",
        age: 3,
        src: "/duke.jpg",
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    };

    return (
        <div>
            <h1>{Duke.name}</h1>
            <img src={Duke.src} alt={Duke.name} />
            <h2>{Duke.age} years old</h2>
            <ul>
                {Duke.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>

            <Link to="/dogs">Return to Dog List</Link>
        </div>
    );
}

export default Duke;