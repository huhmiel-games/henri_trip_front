import { TActivity, TGuide, TUser } from "./types";

export function isUser(user: unknown | undefined): user is TUser
{
    return typeof user === "object" && user !== null && "email" in user;
}

export function isUserList(users: unknown | undefined): users is TUser[]
{
    return Array.isArray(users) && typeof users[0] === "object"  && users[0] !== null && "email" in users[0]
}

export function isGuideList(guides: unknown | undefined): guides is TGuide[]
{
    return Array.isArray(guides) && typeof guides[0] === "object"  && guides[0] !== null && "season" in guides[0]
}

export function isActivityList(activities: unknown | undefined): activities is TActivity[]
{
    return Array.isArray(activities) && typeof activities[0] === "object"  && activities[0] !== null && "address" in activities[0]
}