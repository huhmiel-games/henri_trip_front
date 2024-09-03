import { FormEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addOrUpdate } from "../../data/fetchApi";
import { TGuide } from "../../types";
import { ApiRoute } from "../../constants/enums";

export function AddGuide()
{
    const navigate = useNavigate();
    const guide = useLoaderData() as TGuide;

    const season = ["printemps", "été", "automne", "hiver"]
    const seasonDefaultValue = (season.indexOf(guide?.season.name) + 1 ?? 1).toString()    

    const mobility = ["voiture", "vélo", "à pied", "moto"]
    const mobilityDefaultValue = (mobility.indexOf(guide?.mobility.name) + 1 ?? 1).toString()

    const submitGuide = async (event: FormEvent) =>
    {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            title: { value: string };
            description: { value: string };
            days: { value: number };
            season: { value: string };
            mobility: { value: string };
            forWhom: { value: string };
        };

        const guideBody = {
            id: guide?.id,
            title: target.title.value,
            description: target.description.value,
            days: +target.days.value,
            seasonId: +target.season.value,
            mobilityId: +target.mobility.value,
            forWhomId: +target.forWhom.value,
        }

        const statusCode = await addOrUpdate(ApiRoute.Guide, guideBody);

        if (statusCode === 201)
        {
            navigate('/guides');
        }
    }

    return (
        <div className="w-50 mx-auto">
            <h2 className="m-2">Inscription</h2>
            <form role="form" className="m-2" onSubmit={submitGuide}>
                <div className="mb-3">
                    <label htmlFor="title-input" className="form-label">Title</label>
                    <input defaultValue={guide?.title} role="input" type="text" className="form-control" name="title" id="title-input" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="description-input" className="form-label">Description</label>
                    <textarea defaultValue={guide?.description} role="textarea" className="form-control" id="description-input" name="description" rows={3} required></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="day-input" className="form-label">Duration</label>
                    <input defaultValue={guide?.days || 1} role="input" type="number" className="form-control" name="days" id="day-input" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="season-input" className="form-label">Season</label>
                    <select defaultValue={seasonDefaultValue} className="form-select" aria-label="select season" name="season" required>
                        <option value="1">printemps</option>
                        <option value="2">été</option>
                        <option value="3">automne</option>
                        <option value="4">hiver</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="mobility-input" className="form-label">Mobility</label>
                    <select defaultValue={mobilityDefaultValue} className="form-select" aria-label="select mobility" name="mobility">
                        <option value="1">Voiture</option>
                        <option value="2">Vélo</option>
                        <option value="3">A pied</option>
                        <option value="4">Moto</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="forWhom-input" className="form-label">For</label>
                    <select className="form-select" aria-label="select mobility" name="forWhom">
                        <option value="1">famille</option>
                        <option value="2">seul</option>
                        <option value="3">en groupe</option>
                        <option value="4">entre amis</option>
                    </select>
                </div>

                <div className="col-12">
                    <button role="submit" className="btn btn-primary" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}