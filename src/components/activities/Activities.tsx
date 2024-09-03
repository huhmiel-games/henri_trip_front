import { Link, useLoaderData } from "react-router-dom";
import { isActivityList } from "../../typeguards";
import { AddActivityButton } from "./AddActivityButton";
import { OpeningHour } from "./OpeningHour";
import { Menu } from "../Menu";

export function Activities()
{
    const activities = useLoaderData();

    return (
        <>
            <Menu />
            <AddActivityButton />
            <div className="row p-5">
                {isActivityList(activities) && activities.map(activity =>
                    <div key={activity.id} className="col-sm-6 my-3 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{activity.title}</h3>
                                <div>
                                    <span className="badge rounded-pill text-bg-primary me-2">{activity.category.name}</span>
                                </div>
                                <p className="card-text">{activity.description}</p>
                                <div>
                                    <span className="me-2">Address:</span>
                                    <span className="card-text">{activity.address}</span>
                                </div>

                                <div>
                                    <span className="me-2">website:</span>
                                    <a href={activity.website}>{activity.website}</a>
                                </div>

                                <div>
                                    <span className="me-2">tel:</span>
                                    <span>{activity.tel}</span>
                                </div>

                                <hr />
                                <div>
                                    <h4>Opening Hours</h4>
                                    {activity.openingHours?.map(op => <OpeningHour key={op.id} openingHour={op} />) }
                                </div>


                                <Link to={`/activities/add/${activity.id}`}>
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