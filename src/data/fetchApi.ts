import { Params } from "react-router-dom";
import { API } from "../constants/constants";
import { getToken } from "./getToken";
import { ApiRoute } from "../constants/enums";

// users
export async function register(email: string, password: string)
{
    const data = { email, password };

    return fetch(`${API}/users/register`, {
        headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
        .then((res) =>
        {
            return res.status;
        })
}

export async function login(email: string, password: string)
{
    const data = { email, password };

    return fetch(`${API}/users/login`, {
        headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((response) =>
        {
            sessionStorage.setItem('token', response.token.token)
            sessionStorage.setItem('role', response.role)

            return response.status;
        })
}

// data crud
export async function addOrUpdate(route: ApiRoute, payload: any)
{
    return fetch(`${API}/${route}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(payload)
    })
        .then((res) =>
        {
            return res.status;
        })
}

export async function getAll(route: ApiRoute)
{
    const data = await fetch(`${API}/${route}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })

    if (data.status === 200)
    {
        return data;
    }
    else
    {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
}

export async function getById(route: ApiRoute, params: Params<string>)
{
    if (!params.id) return
    
    const id = +params.id

    const data = await fetch(`${API}/${route}${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    if (data.status === 200)
    {
        return data;
    }
    else
    {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
}