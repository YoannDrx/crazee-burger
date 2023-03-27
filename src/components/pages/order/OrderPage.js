import { Link } from "react-router-dom";

export default function OrderPage() {
    return (
        <div>
            <h1>Bonjour Yoann</h1>
            <Link to={"/"}>
                <button>Déconnexion</button>
            </Link>
        </div>
    );
}
