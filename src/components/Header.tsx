import { Link } from "react-router-dom";
import { API } from "../constants/constants";
import { AddGuideButton } from "./guides/AddGuideButton";

export function Header()
{
    return (
        <header>
            <h1 className='text-center m-2'>Henri Trip</h1>
        </header>
    )
}