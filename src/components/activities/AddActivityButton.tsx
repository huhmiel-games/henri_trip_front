import { Link } from "react-router-dom";
import { API } from "../../constants/constants";

export function AddActivityButton()
{
    return (
        <Link to={`/activities/add`}>
            <button className="position-absolute top-0 end-0 m-2 btn btn-primary rounded-circle shadow-sm">&#10010;</button>
        </Link>
    )
}