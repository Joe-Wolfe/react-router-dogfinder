import { Link } from "react-router-dom";


function DogList() {




    return (
        <div>
            <h1>These are our dogs</h1>
            <ul>
                <li>
                    <Link to="/dogs/Duke">Duke</Link>
                </li>
                <li>
                    <Link to="/dogs/Whiskey">Whiskey</Link>
                </li>
                <li>
                    <Link to="/dogs/Perry">Perry</Link>
                </li>
            </ul>
        </div>
    );
}

export default DogList;