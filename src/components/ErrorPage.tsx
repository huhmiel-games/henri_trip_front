import { useRouteError } from "react-router-dom";
import { Menu } from "./Menu";

export default function ErrorPage()
{
  const error = useRouteError();

  return (
    <>
      <Menu />
      <div className="p-2 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </>
  );
}