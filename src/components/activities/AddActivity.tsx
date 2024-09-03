import { FormEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addOrUpdate } from "../../data/fetchApi";
import { TActivity } from "../../types";
import { ApiRoute } from "../../constants/enums";

export function AddActivity()
{
    const navigate = useNavigate();

    const activity = useLoaderData() as TActivity;

    const submitActivity = async (event: FormEvent) =>
    {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            title: { value: string };
            description: { value: string };
            address: { value: string };
            tel: { value: string };
            website: { value: string };
            categoryId: { value: string };
            
        };

        const targetHours = event.target as typeof event.target & {
            lundiOpen: { value: string };
            lundiClose: { value: string };
            mardiOpen: { value: string };
            mardiClose: { value: string };
            mercrediOpen: { value: string };
            mercrediClose: { value: string };
            jeudiOpen: { value: string };
            jeudiClose: { value: string };
            vendrediOpen: { value: string };
            vendrediClose: { value: string };
            samediOpen: { value: string };
            samediClose: { value: string };
            dimancheOpen: { value: string };
            dimancheClose: { value: string };
        }
        
        const activityBody = {
            id: activity?.id,
            title: target.title.value,
            description: target.description.value,
            address: target.address.value,
            website: target.website.value,
            tel: target.tel.value,
            categoryId: target.categoryId.value,
            openingHours: [
                {
                    id: activity?.openingHours?.find(e => e.day == 'lundi')?.id,
                    day: 'lundi',
                    start: +targetHours.lundiOpen?.value || 0,
                    end: +targetHours.lundiClose?.value || 0
                },
                {
                    id: activity?.openingHours?.find(e => e.day == 'mardi')?.id,
                    day: 'mardi',
                    start: +targetHours.mardiOpen?.value || 0,
                    end: +targetHours.mardiClose?.value || 0
                },
                {
                    id: activity?.openingHours?.find(e => e.day == 'mercredi')?.id,
                    day: 'mercredi',
                    start: +targetHours.mercrediOpen?.value || 0,
                    end: +targetHours.mercrediClose?.value || 0
                },
                {
                    id: activity?.openingHours?.find(e => e.day == 'jeudi')?.id,
                    day: 'jeudi',
                    start: +targetHours.jeudiOpen?.value || 0,
                    end: +targetHours.jeudiClose?.value || 0
                },
                {
                    id: activity?.openingHours?.find(e => e.day == 'vendredi')?.id,
                    day: 'vendredi',
                    start: +targetHours.vendrediOpen?.value || 0,
                    end: +targetHours.vendrediClose?.value || 0
                },
                {
                    id: activity?.openingHours?.find(e => e.day == 'samedi')?.id,
                    day: 'samedi',
                    start: +targetHours.samediOpen?.value || 0,
                    end: +targetHours.samediClose?.value || 0
                },
                {
                    id: activity?.openingHours?.find(e => e.day == 'dimanche')?.id,
                    day: 'dimanche',
                    start: +targetHours.dimancheOpen?.value || 0,
                    end: +targetHours.dimancheClose?.value || 0
                }
            ]
        }

        const statusCode = await addOrUpdate(ApiRoute.Activity, activityBody);

        if (statusCode === 201)
        {
            navigate('/activities');
        }
    }

    return (
        <div className="w-50 mx-auto">
            <h2 className="m-2">Inscription</h2>
            <form role="form" className="m-2" onSubmit={submitActivity}>
                <div className="mb-3">
                    <label htmlFor="title-input" className="form-label">Title</label>
                    <input defaultValue={activity?.title} role="input" type="text" className="form-control" name="title" id="title-input" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="description-input" className="form-label">Description</label>
                    <textarea defaultValue={activity?.description} role="textarea" className="form-control" id="description-input" name="description" rows={3} required></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="address-input" className="form-label">Address</label>
                    <input defaultValue={activity?.address} role="input" type="string" className="form-control" name="address" id="address-input" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tel-input" className="form-label">Tel</label>
                    <input defaultValue={activity?.tel} role="input" type="string" className="form-control" name="tel" id="tel-input" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="website-input" className="form-label">Website</label>
                    <input defaultValue={activity?.website} role="input" type="string" className="form-control" name="website" id="website-input" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="category-input" className="form-label">Category</label>
                    <select defaultValue={activity?.categoryId.toString()} className="form-select" aria-label="select category" name="categoryId" required>
                        <option value="1">musée</option>
                        <option value="2">château</option>
                        <option value="3">activité</option>
                        <option value="4">parc</option>
                        <option value="5">grotte</option>
                    </select>
                </div>


                {/* opening hours only accessible for a existing activity */}
                {activity?.id &&
                    <>
                        <hr />
                        <h3>Opening Hours</h3>
                        <div className="mb-3">
                            <div className="mb-3 row">
                                <span>Lundi</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'lundi')?.start} name="lundiOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'lundi')?.end} name="lundiClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <span>mardi</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'mardi')?.start} name="mardiOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'mardi')?.end} name="mardiClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <span>mercredi</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'mercredi')?.start} name="mercrediOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'mercredi')?.end} name="mercrediClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <span>jeudi</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'jeudi')?.start} name="jeudiOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'jeudi')?.end} name="jeudiClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <span>vendredi</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'vendredi')?.start} name="vendrediOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'vendredi')?.end} name="vendrediClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <span>samedi</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'samedi')?.start} name="samediOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'samedi')?.end} name="samediClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <span>dimanche</span>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'dimanche')?.start} name="dimancheOpen" role="input" type="number" className="form-control col-auto" placeholder="open" />
                                </div>
                                <div className="col-auto">
                                    <input defaultValue={activity?.openingHours?.find(e => e.day === 'dimanche')?.end} name="dimancheClose" role="input" type="number" className="form-control col-auto" placeholder="close" />
                                </div>
                            </div>

                        </div>
                    </>}
                <div className="col-12">
                    <button role="submit" className="btn btn-primary" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}