import { useLoaderData } from "react-router-dom";
import { isUserList } from "../../typeguards";
import { Menu } from "../Menu";

export function Users()
{
    const users = useLoaderData();

    return (
        <div>
            <Menu />
            <div className="m-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isUserList(users) && users.map(user =>
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <th>{user.email}</th>
                                <th>{user.role}</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}