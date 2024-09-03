import { Link, useLoaderData } from "react-router-dom";
import { isGuideList } from "../../typeguards";
import { AddGuideButton } from "./AddGuideButton";
import { Menu } from "../Menu";

export function Guides()
{
    const guides = useLoaderData();

    return (
        <>
            <Menu />
            <AddGuideButton />
            <div className="row p-5">
                {isGuideList(guides) && guides.map(guide =>
                    <div key={guide.id} className="col-sm-6 my-3 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{guide.title}</h5>
                                <div>
                                    <span className="badge rounded-pill text-bg-info me-2">{guide.days} jours</span>
                                    <span className="badge rounded-pill text-bg-success me-2">{guide.forWhom.name}</span>
                                    <span className="badge rounded-pill text-bg-primary me-2">{guide.mobility.name}</span>
                                    <span className="badge rounded-pill text-bg-warning">{guide.season.name}</span>
                                </div>
                                <p className="card-text">{guide.description}.</p>
                                <Link to={`/guides/add/${guide.id}`}>
                                    <button className="btn btn-sm btn-primary">Editer</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}