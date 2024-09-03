import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../data/fetchApi";
import { Menu } from "../Menu";

export function Login()
{
    const navigate = useNavigate();

    const submitLogin = async (event: FormEvent) =>
    {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password?.value || '';

        const statusCode = await login(email, password);

        if (statusCode === 201)
        {
            navigate('/my-guides');
        }
    }

    return (
        <>
            <Menu />
            <div className="w-50 mx-auto">
                <h2 className="m-2">Connexion</h2>
                <form role="form" className="m-2" onSubmit={submitLogin}>
                    <div className="mb-3">
                        <label htmlFor="email-input" className="form-label">Email</label>
                        <input role="input" type="text" className="form-control" name="email" id="email-input" placeholder="my email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password-input" className="form-label">Password</label>
                        <input role="input" type="text" className="form-control" name="password" id="password-input" placeholder="password min 8 characters" required />
                    </div>
                    <div className="col-12">
                        <button role="submit" className="btn btn-primary" type="submit">Se connecter</button>
                    </div>
                </form>
            </div>
        </>
    )
}