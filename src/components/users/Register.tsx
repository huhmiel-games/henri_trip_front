import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../data/fetchApi";
import { Menu } from "../Menu";

export function Register()
{
    const navigate = useNavigate();

    const submitRegister = async (event: FormEvent) =>
    {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password?.value || '';

        const statusCode = await register(email, password);

        if (statusCode === 201)
        {
            navigate('/my-guides');
        }
    }

    return (
        <>
            <Menu />
            <div className="w-50 mx-auto">
                <h2 className="m-2">Inscription</h2>
                <form role="form" className="m-2" onSubmit={submitRegister}>
                    <div className="mb-3">
                        <label htmlFor="email-input" className="form-label">Email</label>
                        <input role="input" type="text" className="form-control" name="email" id="email-input" placeholder="my email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password-input" className="form-label">Password</label>
                        <input role="input" type="text" className="form-control" name="password" id="password-input" placeholder="password min 8 characters" required />
                    </div>
                    <div className="col-12">
                        <button role="submit" className="btn btn-primary" type="submit">S'enregistrer</button>
                    </div>
                </form>
            </div>
        </>
    )
}