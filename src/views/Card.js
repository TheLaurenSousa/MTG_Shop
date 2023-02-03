import { useParams } from "react-router-dom";

export default () => {
    const id = useParams().id;
    return (
        <div>
            <p>Placeholder for Card info</p>
            <p>{id}</p>
        </div>
    )
}