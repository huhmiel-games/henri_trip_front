import { Link } from "react-router-dom";

export function Menu()
{
    return (
        <div className="shadow-sm">
            <Link to={`/activities`}>
                <span className="link-offset-2 link-underline link-underline-opacity-0 m-3">Activities</span>
            </Link>

            <Link to={`/guides`}>
                <span className="link-offset-2 link-underline link-underline-opacity-0 m-3">Guides</span>
            </Link>

            <Link to={`/users`}>
                <span className="link-offset-2 link-underline link-underline-opacity-0 m-3">Users</span>
            </Link>

            <Link to={`/login`}>
                <span className="link-offset-2 link-underline link-underline-opacity-0 m-3">Login</span>
            </Link>

            <Link to={`/register`}>
                <span className="link-offset-2 link-underline link-underline-opacity-0 m-3">Register</span>
            </Link>
        </div>
    )
}